// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use settings_page::{create_default_config};

fn main() {
  create_default_config();
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![settings_page::set_config_data, settings_page::get_config_data, home_page::notifications::short_break_notification])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

mod home_page;
mod settings_page;