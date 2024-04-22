#!/bin/bash
alacritty -e bash -c 'nix-shell --run "cargo tauri dev; exec bash"' &
nix-shell --run "webstorm & idea-ultimate & exit"
exit
