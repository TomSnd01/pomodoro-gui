#!/bin/bash
alacritty -e bash -c 'nix-shell --run "cargo tauri dev"' &
nix-shell --run "webstorm & idea-ultimate & exit"
exit
