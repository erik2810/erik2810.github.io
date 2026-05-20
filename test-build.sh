#!/bin/bash
set -e

if [ -f .env ]; then
    source .env
fi

if [ -z "$STATICRYPT_PASSWORD" ]; then
    echo "Error: STATICRYPT_PASSWORD not set. Add it to .env or export it."
    exit 1
fi

echo "Cleaning old build files..."
rm -rf public

echo "Building Hugo site for local testing..."
# The -b flag forces Hugo to make all links point to localhost instead of GitHub
hugo -b "http://localhost:8000"

echo "Encrypting library..."
# Find all HTML files and loop through them one by one
find public/library -name "*.html" | while read -r file; do
    # Get the exact folder where the current HTML file lives
    dir=$(dirname "$file")

    # Run staticrypt and output exactly into that folder
    npx staticrypt "$file" -d "$dir" -p "$STATICRYPT_PASSWORD"
done

echo "Encryption complete! Starting local server..."
echo "Go to: http://localhost:8000"
echo "(Press Ctrl+C to stop)"
python3 -m http.server -d public 8000