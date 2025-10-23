import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiCheck, FiX, FiLogOut, FiEye, FiLinkedin, FiEdit2, FiSave, FiMail } from 'react-icons/fi';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { database, auth } from '../firebase';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [authLoading, setAuthLoading] = useState(true);

  // Monitor Firebase Auth state
  useEffect(() => {
    if (!auth) {
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('✅ User authenticated:', user.email);
        setIsAuthenticated(true);
      } else {
        console.log('❌ User not authenticated');
        setIsAuthenticated(false);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Load testimonials when authenticated
  useEffect(() => {
    if (!isAuthenticated || !database) return;

    const testimonialsRef = ref(database, 'testimonials');
    const unsubscribe = onValue(testimonialsRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      // Sort by timestamp (newest first)
      data.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      setTestimonials(data);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!auth) {
      setError('Firebase Authentication not initialized');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Login successful');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('❌ Login error:', error);

      // User-friendly error messages
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else if (error.code === 'auth/user-not-found') {
        setError('No admin account found. Please create one in Firebase Console.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError(`Login failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;

    try {
      await signOut(auth);
      console.log('✅ Logout successful');
    } catch (error) {
      console.error('❌ Logout error:', error);
    }
  };

  const handleApprove = async (testimonialId) => {
    if (!database) return;

    setLoading(true);
    try {
      const testimonialRef = ref(database, `testimonials/${testimonialId}`);
      await update(testimonialRef, { approved: true });
      console.log('✅ Testimonial approved:', testimonialId);
    } catch (error) {
      console.error('❌ Error approving testimonial:', error);
      alert('Failed to approve testimonial');
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (testimonialId) => {
    if (!database) return;

    setLoading(true);
    try {
      const testimonialRef = ref(database, `testimonials/${testimonialId}`);
      await update(testimonialRef, { approved: false });
      console.log('✅ Testimonial rejected:', testimonialId);
    } catch (error) {
      console.error('❌ Error rejecting testimonial:', error);
      alert('Failed to reject testimonial');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial.id);
    setEditForm({
      name: testimonial.name || '',
      role: testimonial.role || '',
      linkedIn: testimonial.linkedIn || '',
      text: testimonial.text || ''
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = async (testimonialId) => {
    if (!database) return;

    setLoading(true);
    try {
      const testimonialRef = ref(database, `testimonials/${testimonialId}`);
      await update(testimonialRef, {
        name: editForm.name,
        role: editForm.role,
        linkedIn: editForm.linkedIn,
        text: editForm.text
      });
      console.log('✅ Testimonial updated:', testimonialId);
      setEditingId(null);
      setEditForm({});
      alert('✅ Testimonial updated successfully!');
    } catch (error) {
      console.error('❌ Error updating testimonial:', error);
      alert(`❌ Failed to update testimonial: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Unknown date';
    return new Date(timestamp).toLocaleString();
  };

  // Login Form
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-500/20 rounded-full">
              <FiLock className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Sign in with your Firebase admin account
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FiMail className="inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FiLock className="inline mr-2" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-xs text-gray-400 mb-2">
              <strong className="text-gray-300">First time setup?</strong>
            </p>
            <ol className="text-xs text-gray-400 space-y-1 list-decimal list-inside">
              <li>Go to Firebase Console</li>
              <li>Navigate to Authentication</li>
              <li>Enable Email/Password sign-in</li>
              <li>Add a new user with admin email</li>
            </ol>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            Testimonial Management
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
          >
            <FiLogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-1">Total</p>
            <p className="text-3xl font-bold text-white">{testimonials.length}</p>
          </div>
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
            <p className="text-green-400 text-sm mb-1">Approved</p>
            <p className="text-3xl font-bold text-green-400">
              {testimonials.filter(t => t.approved === true).length}
            </p>
          </div>
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6">
            <p className="text-yellow-400 text-sm mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-400">
              {testimonials.filter(t => t.approved !== true).length}
            </p>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="space-y-4">
          {testimonials.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <FiEye className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No testimonials yet</p>
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-gray-800 rounded-lg p-6 border-l-4 ${
                  testimonial.approved === true
                    ? 'border-green-500'
                    : 'border-yellow-500'
                }`}
              >
                {editingId === testimonial.id ? (
                  /* Edit Mode */
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                      <input
                        type="text"
                        value={editForm.role}
                        onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={editForm.linkedIn}
                        onChange={(e) => setEditForm({...editForm, linkedIn: e.target.value})}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial</label>
                      <textarea
                        value={editForm.text}
                        onChange={(e) => setEditForm({...editForm, text: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSaveEdit(testimonial.id)}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
                      >
                        <FiSave className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-50"
                      >
                        <FiX className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View Mode */
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">
                            {testimonial.name}
                          </h3>
                          {testimonial.linkedIn && (
                            <a
                              href={testimonial.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                              <FiLinkedin className="w-4 h-4 text-blue-400" />
                            </a>
                          )}
                        </div>
                        {testimonial.role && (
                          <p className="text-gray-400 text-sm mb-2">
                            {testimonial.role}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          {formatDate(testimonial.timestamp)}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div>
                        {testimonial.approved === true ? (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                            Approved
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(testimonial)}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
                      >
                        <FiEdit2 className="w-4 h-4" />
                        Edit
                      </button>
                      {testimonial.approved !== true && (
                        <button
                          onClick={() => handleApprove(testimonial.id)}
                          disabled={loading}
                          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors disabled:opacity-50"
                        >
                          <FiCheck className="w-4 h-4" />
                          Approve
                        </button>
                      )}
                      {testimonial.approved === true && (
                        <button
                          onClick={() => handleReject(testimonial.id)}
                          disabled={loading}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors disabled:opacity-50"
                        >
                          <FiX className="w-4 h-4" />
                          Reject
                        </button>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
