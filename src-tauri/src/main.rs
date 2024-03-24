// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::PathBuf;
use crate::settings_page::get_config_dir;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![play_pause])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}

mod home_page;
mod settings_page;

#[tauri::command]
fn play_pause() {
  println!("Hello");
  let path = get_config_dir();
}