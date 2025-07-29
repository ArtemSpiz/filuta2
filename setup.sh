#!/bin/bash

# Filuta Nuxt 3 Setup Script
# This script sets up the Nuxt 3 project with all dependencies and configurations

set -e

echo "🚀 Setting up Filuta Nuxt 3 Project..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js version: $(node -v)"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "npm version: $(npm -v)"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    print_success "Dependencies installed successfully"
}

# Set up environment variables
setup_env() {
    print_status "Setting up environment variables..."
    
    if [ ! -f ".env" ]; then
        if [ -f "env.example" ]; then
            cp env.example .env
            print_success "Environment file created from example"
        else
            print_warning "No env.example found. Creating basic .env file..."
            cat > .env << EOF
# Directus CMS Configuration
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=your_directus_token_here

# Site Configuration
SITE_URL=http://localhost:3000
SITE_NAME=Filuta
SITE_DESCRIPTION=AI-Powered Compliance Solutions

# Development Configuration
NODE_ENV=development
NUXT_PUBLIC_API_BASE=http://localhost:3000/api
EOF
            print_success "Basic .env file created"
        fi
    else
        print_warning ".env file already exists"
    fi
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p public
    mkdir -p assets/css
    mkdir -p assets/img
    mkdir -p components
    mkdir -p layouts
    mkdir -p pages
    mkdir -p server/api
    mkdir -p server/utils
    
    print_success "Directories created"
}

# Set up Git hooks (optional)
setup_git_hooks() {
    if [ -d ".git" ]; then
        print_status "Setting up Git hooks..."
        
        # Create pre-commit hook for linting
        mkdir -p .git/hooks
        cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
npm run lint
EOF
        chmod +x .git/hooks/pre-commit
        
        print_success "Git hooks configured"
    fi
}

# Check Directus setup
check_directus() {
    print_status "Checking Directus CMS setup..."
    
    if command -v npx &> /dev/null; then
        print_status "To set up Directus CMS, run:"
        echo "  npx create-directus-project@latest my-directus-project"
        echo "  cd my-directus-project"
        echo "  npm run dev"
        echo ""
        print_status "Then update your .env file with the Directus URL and token"
    fi
}

# Run initial build
initial_build() {
    print_status "Running initial build..."
    
    if npm run build &> /dev/null; then
        print_success "Initial build completed successfully"
    else
        print_warning "Initial build failed. This is normal for first-time setup."
        print_status "You can run 'npm run dev' to start development"
    fi
}

# Display next steps
show_next_steps() {
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Edit .env file with your Directus configuration"
    echo "2. Run 'npm run dev' to start development server"
    echo "3. Open http://localhost:3000 in your browser"
    echo ""
    echo "Available commands:"
    echo "  npm run dev      - Start development server"
    echo "  npm run build    - Build for production"
    echo "  npm run preview  - Preview production build"
    echo "  npm run generate - Generate static site"
    echo "  npm run lint     - Run linting"
    echo ""
    echo "For more information, see README.md"
}

# Main setup function
main() {
    echo "=========================================="
    echo "  Filuta Nuxt 3 Project Setup"
    echo "=========================================="
    echo ""
    
    check_node
    check_npm
    create_directories
    install_dependencies
    setup_env
    setup_git_hooks
    check_directus
    initial_build
    show_next_steps
}

# Run main function
main "$@" 