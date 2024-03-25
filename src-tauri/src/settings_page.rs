use std::path::PathBuf;
use dirs::config_dir;
use serde::{Serialize, Deserialize};
use serde_json;
use std::fs;
use std::fs::File;
use std::io::BufReader;

#[derive(Serialize, Deserialize)]
pub struct SettingsData {
    focus_duration: usize,
    short_break: usize,
    long_break: usize,
    cycle_count: usize,
}

pub fn create_default_config() {
    let config_path = get_config_dir();
    let mut data_path = config_path;
    data_path.push("settingsData.json");

    if data_path.exists() {return;};

    let data = SettingsData {
        focus_duration: 25,
        short_break: 5,
        long_break: 15,
        cycle_count: 4,
    };

    let json_string = serde_json::to_string_pretty(&data).expect("Unable to serialize json string");

    fs::write(data_path, json_string).expect("Unable to write to file")
}

pub fn get_config_dir() -> PathBuf {
    let base_path = config_dir().expect("Failed to find a config directory");

    let mut config_path: PathBuf = base_path;
    config_path.push("pomodoro-gui");

    if !config_path.exists() {
        std::fs::create_dir_all(&config_path).expect("Failed to create the config directory.");
    }

    config_path
}

#[tauri::command]
pub fn get_config_data() -> String {
    let config_path = get_config_dir();
    let mut data_path = config_path;
    data_path.push("settingsData.json");

    fs::read_to_string(data_path).unwrap()
}

#[tauri::command]
pub fn set_config_data(target: &str, value: usize) {
    let config_path = get_config_dir();
    let mut data_path = config_path;
    data_path.push("settingsData.json");

    let file = File::open(&data_path).expect("File not found");
    let reader = BufReader::new(file);
    let mut data: SettingsData = serde_json::from_reader(reader).expect("Error reading data");

    match target {
        "focus_duration" => data.focus_duration = value,
        "short_break" => data.short_break = value,
        "long_break" => data.long_break = value,
        "cycle_count" => data.cycle_count = value,
        _ => println!("Field not found"),
    }

    let json_string = serde_json::to_string_pretty(&data).expect("Unable to serialize json string");

    fs::write(data_path, json_string).expect("Unable to write to file")
}
