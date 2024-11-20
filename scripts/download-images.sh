#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download Private Events images
curl -L "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8" -o public/images/terrace.jpg
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" -o public/images/private-room.jpg
curl -L "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" -o public/images/garden.jpg

# Download Gallery images
# Interior
curl -L "https://images.unsplash.com/photo-1578474846511-04ba529f0b88" -o public/images/gallery-interior.jpg

# Cuisine
curl -L "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9" -o public/images/gallery-pasta.jpg
curl -L "https://images.unsplash.com/photo-1560963689-b5682b6440f8" -o public/images/gallery-seafood.jpg
curl -L "https://images.unsplash.com/photo-1551024506-0bccd828d307" -o public/images/gallery-dessert.jpg

# Wine & Bar
curl -L "https://images.unsplash.com/photo-1560512823-829485b8bf24" -o public/images/gallery-wine.jpg
curl -L "https://images.unsplash.com/photo-1470337458703-46ad1756a187" -o public/images/gallery-bar.jpg

# Spaces
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" -o public/images/gallery-private.jpg
curl -L "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" -o public/images/gallery-garden.jpg

# Download award logos
curl -L "https://raw.githubusercontent.com/FanWebstudio/osteria-luna/main/public/images/award-michelin.png" -o public/images/award-michelin.png
curl -L "https://raw.githubusercontent.com/FanWebstudio/osteria-luna/main/public/images/award-zagat.png" -o public/images/award-zagat.png
curl -L "https://raw.githubusercontent.com/FanWebstudio/osteria-luna/main/public/images/award-james-beard.png" -o public/images/award-james-beard.png
