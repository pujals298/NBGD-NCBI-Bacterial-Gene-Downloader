#!/usr/bin/env bash
set -euo pipefail

# Create venv if missing
if [ ! -f ".venv/bin/python" ]; then
  echo "Creating local Python environment (.venv)..."
  python3 -m venv .venv
fi

echo "Installing required Python packages..."
.venv/bin/python -m pip install --upgrade pip
.venv/bin/python -m pip install -r requirements.txt

echo "Running run.py..."
.venv/bin/python ./run.py