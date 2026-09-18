#!/usr/bin/env bash
# Find data-node-ids of key clickable elements in a frame .tsx.
# Usage: scripts/find-ids.sh <frame.tsx>
#
# Prints one line per keyword: <keyword>  <data-node-id>
# The id is the CLOSEST data-node-id ANCESTOR of the text — that is what
# useFrameClicks matches on, so it's what belongs in registry.actions.

set -e
FILE="$1"
if [[ -z "$FILE" || ! -f "$FILE" ]]; then
  echo "usage: $0 <frame.tsx>" >&2; exit 1
fi

# Keywords whose ancestor id we want. Add here as new frames introduce new CTAs.
KEYWORDS=(
  "Skip" "Continue" "Cancel" "Next" "Save"
  "Overview" "Map"
  "NG Floor" "NG Fixed" ">PG<"
  "Schedule" "Environment" "DSP" "CPM"
  "Budget" "Frame" "Impressions" "Location"
  "Check availability" "Check allocation"
  "Send for approval" "Confirm" "Reject" "Approve" "Terminate"
  "New deal line"
  "Deal line 1" "Deal line 2"
)

for kw in "${KEYWORDS[@]}"; do
  # For each keyword, find its line and grep back the closest ancestor with data-node-id
  line=$(grep -nF "$kw" "$FILE" | head -1 | cut -d: -f1)
  [[ -z "$line" ]] && continue
  # Walk backwards up to 8 lines to find the enclosing element with data-node-id
  id=$(awk -v L="$line" 'NR<=L{ if(match($0, /data-node-id="([^"]+)"/, a)) last=a[1] } END{print last}' "$FILE")
  [[ -n "$id" ]] && printf "%-25s %s\n" "$kw" "$id"
done
