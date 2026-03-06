#!/bin/bash
# Push to medhaverse-pvt-ltd/medhaverse using a Personal Access Token.
# Usage: ./scripts/push-to-org.sh
# You will be prompted for your GitHub PAT (create at https://github.com/settings/tokens).

set -e
cd "$(dirname "$0")/.."
REMOTE="https://github.com/medhaverse-pvt-ltd/medhaverse.git"
ORIGIN_NO_TOKEN="https://github.com/medhaverse-pvt-ltd/medhaverse.git"

echo "Push to medhaverse-pvt-ltd/medhaverse"
echo "You need a Personal Access Token with 'repo' scope."
echo ""
read -sp "Paste your GitHub token: " TOKEN
echo ""
if [ -z "$TOKEN" ]; then
  echo "No token entered. Exiting."
  exit 1
fi

echo "Setting remote and pushing..."
git remote set-url origin "https://medhaverse-pvt-ltd:${TOKEN}@github.com/medhaverse-pvt-ltd/medhaverse.git"
git push -u origin main
echo "Removing token from remote URL..."
git remote set-url origin "$ORIGIN_NO_TOKEN"
echo "Done. Pushed to medhaverse-pvt-ltd/medhaverse."
