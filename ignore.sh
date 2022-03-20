#!/bin/bash
echo "Comparing last cached commit $CACHED_COMMIT_REF with current commit $COMMIT_REF"
git diff --quiet "$CACHED_COMMIT_REF" "$COMMIT_REF"
