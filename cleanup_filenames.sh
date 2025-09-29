#!/bin/bash
# Clean up repo filenames for Netlify builds

find . -depth \
  -name "* *" -o -name "*'*" -o -name '*"*' | while read file; do
    newfile=$(echo "$file" | sed "s/[ '"_/_/g")
    echo "Renaming: $file -> $newfile"
    git mv "$file" "$newfile"
done

git commit -m "chore: cleaned up file and directory names for Netlify"