#!/bin/bash

# Script to publish @english-test-free/exercise-system package to GitHub Packages

set -e

echo "🚀 Publishing @english-test-free/exercise-system to GitHub Packages"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found. Please run this script from packages/exercise-system directory"
  exit 1
fi

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
  echo "⚠️  GITHUB_TOKEN environment variable not set"
  echo ""
  echo "Please follow these steps:"
  echo "1. Go to https://github.com/settings/tokens/new"
  echo "2. Create a token with 'write:packages' and 'read:packages' scopes"
  echo "3. Run: export GITHUB_TOKEN=your_token_here"
  echo ""
  read -p "Enter your GitHub Personal Access Token (or press Ctrl+C to cancel): " token
  export GITHUB_TOKEN=$token
fi

# Configure npm to use GitHub token
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc.local
echo "@english-test-free:registry=https://npm.pkg.github.com" >> .npmrc.local

# Clean and build
echo "🧹 Cleaning dist folder..."
yarn clean

echo "🔨 Building package..."
yarn build

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Error: Build failed. dist folder not found"
  rm -f .npmrc.local
  exit 1
fi

echo "✅ Build successful!"
echo ""

# Show package info
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "📦 Package: $PACKAGE_NAME"
echo "📌 Version: $PACKAGE_VERSION"
echo ""

# Confirm before publishing
read -p "Do you want to publish this version? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
  echo "❌ Publishing cancelled"
  rm -f .npmrc.local
  exit 0
fi

# Publish to GitHub Packages
echo ""
echo "📦 Publishing to GitHub Packages..."
npm publish --userconfig .npmrc.local

# Clean up
rm -f .npmrc.local

echo ""
echo "✅ Package published successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Verify at: https://github.com/orgs/english-test-free/packages"
echo "2. Install in your project: yarn add @english-test-free/exercise-system"
echo ""

