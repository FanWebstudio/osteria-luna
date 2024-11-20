#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -L "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8" -o public/images/terrace.jpg
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" -o public/images/private-room.jpg
curl -L "https://images.unsplash.com/photo-1528890305426-c601c9fa2d68" -o public/images/garden.jpg
