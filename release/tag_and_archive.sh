#!/usr/bin/env bash
set -euo pipefail

# Determine version tag
VERSION=${VERSION:-v1.0-release}

# Ensure ARCHIVE_DIR is set
if [ -z "${ARCHIVE_DIR:-}" ]; then
  echo "Error: ARCHIVE_DIR environment variable is not set."
  exit 1
fi

# Create git tag (annotated)
git tag -a "$VERSION" -m "Release $VERSION"

# Create ZIP archive of the repository
ARCHIVE_NAME="${VERSION}.zip"
git archive --format=zip -o "$ARCHIVE_NAME" HEAD

# Move archive to the approved location
mv "$ARCHIVE_NAME" "$ARCHIVE_DIR/"

# Log the operation
{
  echo "## Release $VERSION"
  echo "- Date: $(date '+%Y-%m-%d')"
  echo "- Sign‑off Document: release/README_SIGNOFF.md"
  echo "- Archive Path: $ARCHIVE_DIR/$ARCHIVE_NAME"
  echo ""
} >> project_log.md
