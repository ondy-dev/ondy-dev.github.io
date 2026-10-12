#!/bin/sh
# Builds the zip for itch.io: index.html at the top, and the game/ folder it loads.
# Upload it as an HTML project and tick "This file will be played in the browser".
set -e
cd "$(dirname "$0")/.."
out="${1:-$HOME/Desktop/tomorrow-itch.zip}"
rm -f "$out"
zip -qrX "$out" index.html game -x "*.DS_Store"
unzip -l "$out"
