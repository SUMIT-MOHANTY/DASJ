#!/usr/bin/env bash

# Deploy script - adds, commits, and pushes the 404 assets.
git add .
git commit -m "Add custom 404 page and fallback routing"
git push
