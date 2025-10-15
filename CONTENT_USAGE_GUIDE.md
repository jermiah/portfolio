# Content Usage Guide

This guide explains how to add and update content in your portfolio, including links, sections, and automatic updates.

## 📁 File Location

All content is stored in JSON files:
- **English**: `src/content/en.json`
- **French**: `src/content/fr.json`

## 🔗 Adding Links to Sections

### 1. **Overview Section - Featured Project Link**

**Location**: `overview.featured`

**Format**:
```json
"overview": {
  "featured": {
    "title": "Research Highlight",
    "description": "Your research description here",
    "link": "https://github.com/yourusername/your-repo",
    "linkText": "View Research"
  }
}
```

**Behavior**:
- If `featured` object exists → Shows the featured section
- If `link` field exists → Shows clickable link
- If `link` is missing → Shows only title and description (no link)
- If entire `featured` object is missing → Section doesn't appear

---

### 2. **Projects Section - Project Links**

**Location**: `projects.professional.categories[].items[]` or `projects.personal.categories[].items[]`

**Format**:
```json
"projects": {
  "professional": {
    "categories": [
      {
        "name": "In-Company Projects",
        "items": [
          {
            "title": "Your Project Name",
            "description": "Project description",
            "tags": ["React", "Node.js", "MongoDB"],
            "links": {
              "code": "https://github.com/yourusername/repo",
              "demo": "https://your-demo-site.com"
            }
          }
        ]
      }
    ]
  }
}
```

**Behavior**:
- `links.code` → Shows "Code" button with GitHub icon
- `links.demo` → Shows "Demo" button with external link icon
- If `links` object is missing → No buttons appear
- If only `code` exists → Only code button appears
- If only `demo` exists → Only demo button appears

---

### 3. **Open Source Section - Repository Links**

**Location**: `opensource.projects[]`

**Format**:
```json
"opensource": {
  "projects": [
    {
      "project": "Project Name",
      "repo": "https://github.com/yourusername/repo",
      "tags": ["Python", "AI", "CLI"],
      "highlights": [
        "Feature 1",
        "Feature 2"
      ]
    }
  ]
}
```

**Behavior**:
- `repo` field is **required** for each project
- Automatically creates clickable link to GitHub repository
- Shows GitHub icon next to project name

---

### 4. **Hero Section - Social Links**

**Location**: `hero.links`

**Format**:
```json
"hero": {
  "links": {
    "resume": "https://drive.google.com/your-resume-link",
    "github": "https://github.com/yourusername",
    "linkedin": "https://www.linkedin.com/in/yourprofile/"
  }
}
```

**Behavior**:
- `github` → Creates GitHub button in hero section
- `linkedin` → Creates LinkedIn button in hero section
- `resume` → Used for resume download/view (if implemented)

---

### 5. **Research Section - Paper/Thesis Links**

**Location**: `research.papers[]` or `thesis`

**Format**:
```json
"research": {
  "papers": [
    {
      "title": "Paper Title",
      "authors": "Author Names",
      "venue": "Conference/Journal Name",
      "year": "2024",
      "link": "https://arxiv.org/your-paper",
      "tags": ["NLP", "Deep Learning"]
    }
  ],
  "thesis": {
    "title": "Your Thesis Title",
    "university": "University Name",
    "year": "2024",
    "link": "https://link-to-thesis.com",
    "description": "Thesis description"
  }
}
```

**Behavior**:
- `link` field creates "View Paper" or "View Thesis" button
- If `link` is missing → No button appears, only shows information

---

## 📝 Content Update Examples

### Example 1: Adding a New Project with Links

```json
{
  "title": "AI Chatbot Platform",
  "description": "Built a multi-agent chatbot platform using LangChain and OpenAI",
  "tags": ["Python", "LangChain", "OpenAI", "FastAPI"],
  "links": {
    "code": "https://github.com/yourusername/ai-chatbot",
    "demo": "https://chatbot-demo.vercel.app"
  }
}
```

### Example 2: Adding Featured Research (Overview Section)

```json
"overview": {
  "featured": {
    "title": "Research Highlight",
    "description": "Exploring efficient intent-routing and recursive reasoning in small models",
    "link": "https://github.com/yourusername/research-repo",
    "linkText": "View Research"
  }
}
```

### Example 3: Adding Open Source Contribution

```json
{
  "project": "LangChain Community",
  "repo": "https://github.com/langchain-ai/langchain",
  "tags": ["Python", "LLM", "Open Source"],
  "highlights": [
    "Contributed 5+ PRs for RAG improvements",
    "Fixed critical bugs in vector store integration"
  ]
}
```

---

## 🔄 Automatic Updates

### How It Works:

1. **Edit JSON File**: Update `src/content/en.json` or `src/content/fr.json`
2. **Save File**: Changes are automatically detected
3. **Hot Reload**: Vite dev server reloads the page
4. **Content Updates**: New content appears immediately

### What Updates Automatically:

✅ **Text Content**: All text, descriptions, titles
✅ **Links**: All URLs and hyperlinks
✅ **Lists**: Skills, tags, highlights, descriptions
✅ **Sections**: Adding/removing entire sections
✅ **Images**: Profile photo path
✅ **Contact Info**: Email, phone numbers

### What Requires Code Changes:

❌ **New Section Types**: Requires new component
❌ **Layout Changes**: Requires CSS/component updates
❌ **New Features**: Requires component logic updates

---

## 📋 JSON Format Rules

### ✅ Valid JSON:
```json
{
  "title": "My Project",
  "tags": ["React", "Node.js"],
  "link": "https://github.com/user/repo"
}
```

### ❌ Invalid JSON:
```json
{
  "title": "My Project",
  "tags": ["React", "Node.js",],  // ❌ Trailing comma
  // "link": "https://github.com"  // ❌ Comments not allowed
}
```

### Important Rules:
1. **No trailing commas** after last item in arrays/objects
2. **No comments** (use separate documentation)
3. **Use double quotes** for strings (not single quotes)
4. **Escape special characters** in strings (`\"`, `\\`, etc.)

---

## 🎯 Quick Reference: Which Sections Accept Links?

| Section | Link Field | Format | Required? |
|---------|-----------|--------|-----------|
| **Overview** | `overview.featured.link` | String (URL) | Optional |
| **Projects** | `projects.*.items[].links.code` | String (URL) | Optional |
| **Projects** | `projects.*.items[].links.demo` | String (URL) | Optional |
| **Open Source** | `opensource.projects[].repo` | String (URL) | Required |
| **Research** | `research.papers[].link` | String (URL) | Optional |
| **Thesis** | `thesis.link` | String (URL) | Optional |
| **Hero** | `hero.links.github` | String (URL) | Optional |
| **Hero** | `hero.links.linkedin` | String (URL) | Optional |
| **Hero** | `hero.links.resume` | String (URL) | Optional |

---

## 💡 Tips

1. **Test Your JSON**: Use [JSONLint](https://jsonlint.com/) to validate before saving
2. **Use HTTPS**: Always use `https://` for external links
3. **Check Links**: Verify all URLs work before adding them
4. **Consistent Format**: Keep similar sections formatted the same way
5. **Backup**: Keep a backup of your JSON before major changes

---

## 🆘 Troubleshooting

### Problem: Link doesn't appear
**Solution**: Check if the `link` or `links` field exists and has a valid URL

### Problem: Section doesn't show
**Solution**: Verify the parent object exists (e.g., `featured` object for overview link)

### Problem: JSON error on save
**Solution**: Check for trailing commas, missing quotes, or invalid characters

### Problem: Changes don't appear
**Solution**: 
1. Save the file
2. Check browser console for errors
3. Refresh the page manually if needed

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Validate your JSON at [JSONLint](https://jsonlint.com/)
3. Compare with existing working examples in the JSON file
4. Ensure all required fields are present

---

**Last Updated**: 2025
**Version**: 1.0
