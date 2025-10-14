#!/bin/bash

# Portfolio Setup Script
# This script helps set up and deploy your new React portfolio

echo "🚀 Portfolio Setup Script"
echo "========================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if Node.js is installed
echo "Checking prerequisites..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi
print_success "Node.js is installed: $(node --version)"

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm."
    exit 1
fi
print_success "npm is installed: $(npm --version)"

echo ""
echo "What would you like to do?"
echo "1) Initial setup (backup old files, install dependencies)"
echo "2) Install dependencies only"
echo "3) Run development server"
echo "4) Build for production"
echo "5) Deploy to GitHub Pages"
echo "6) Full deployment (build + deploy)"
echo "7) Exit"
echo ""
read -p "Enter your choice (1-7): " choice

case $choice in
    1)
        echo ""
        print_info "Starting initial setup..."
        
        # Backup old files
        if [ -f "index.html" ] && [ ! -f "index-new.html" ]; then
            print_warning "Backing up old files..."
            mkdir -p old-portfolio
            mv index.html old-portfolio/ 2>/dev/null
            mv script.js old-portfolio/ 2>/dev/null
            mv styles_v2.css old-portfolio/ 2>/dev/null
            mv webgl.js old-portfolio/ 2>/dev/null
            mv README.md old-portfolio/ 2>/dev/null
            print_success "Old files backed up to old-portfolio/"
        fi
        
        # Rename new files
        if [ -f "index-new.html" ]; then
            mv index-new.html index.html
            print_success "Renamed index-new.html to index.html"
        fi
        
        if [ -f "README-new.md" ]; then
            mv README-new.md README.md
            print_success "Renamed README-new.md to README.md"
        fi
        
        # Create public folder and copy photo
        mkdir -p public
        if [ -f "photo.jpg" ]; then
            cp photo.jpg public/
            print_success "Copied photo.jpg to public/"
        fi
        
        # Install dependencies
        print_info "Installing dependencies..."
        npm install
        
        if [ $? -eq 0 ]; then
            print_success "Dependencies installed successfully!"
            echo ""
            print_info "Setup complete! You can now run:"
            echo "  npm run dev     - Start development server"
            echo "  npm run build   - Build for production"
            echo "  npm run deploy  - Deploy to GitHub Pages"
        else
            print_error "Failed to install dependencies"
            exit 1
        fi
        ;;
        
    2)
        print_info "Installing dependencies..."
        npm install
        
        if [ $? -eq 0 ]; then
            print_success "Dependencies installed successfully!"
        else
            print_error "Failed to install dependencies"
            exit 1
        fi
        ;;
        
    3)
        print_info "Starting development server..."
        npm run dev
        ;;
        
    4)
        print_info "Building for production..."
        npm run build
        
        if [ $? -eq 0 ]; then
            print_success "Build completed successfully!"
            print_info "Build output is in the 'dist' folder"
        else
            print_error "Build failed"
            exit 1
        fi
        ;;
        
    5)
        print_info "Deploying to GitHub Pages..."
        npm run deploy
        
        if [ $? -eq 0 ]; then
            print_success "Deployment successful!"
            print_info "Your site will be live at: https://jermiah.github.io/portfolio/"
            print_warning "Note: It may take 1-2 minutes for changes to appear"
        else
            print_error "Deployment failed"
            exit 1
        fi
        ;;
        
    6)
        print_info "Building and deploying..."
        
        # Build
        npm run build
        if [ $? -ne 0 ]; then
            print_error "Build failed"
            exit 1
        fi
        print_success "Build completed!"
        
        # Deploy
        npm run deploy
        if [ $? -eq 0 ]; then
            print_success "Deployment successful!"
            echo ""
            print_info "🎉 Your portfolio is now live!"
            print_info "Visit: https://jermiah.github.io/portfolio/"
            print_warning "Note: It may take 1-2 minutes for changes to appear"
        else
            print_error "Deployment failed"
            exit 1
        fi
        ;;
        
    7)
        print_info "Exiting..."
        exit 0
        ;;
        
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

echo ""
print_success "Done!"
