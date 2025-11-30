#!/bin/bash
set -e

DEVICE="iPhone 16"
PORT=5173

# Boot device (ignore error if already booted)
xcrun simctl boot "$DEVICE" 2>/dev/null || true

# Make sure Simulator app is open
open -a Simulator

# Start Vite in background
vite --port "$PORT" &
VITE_PID=$!

# Give Vite a moment to start
sleep 5

# Open the URL inside the booted simulator
xcrun simctl openurl booted "http://localhost:$PORT"

# Keep this script attached to Vite so Ctrl+C kills it too
wait "$VITE_PID"
