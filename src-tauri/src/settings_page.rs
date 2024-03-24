use std::path::PathBuf;
use dirs::config_dir;

pub fn get_config_dir() -> PathBuf {
    let base_path = config_dir().expect("Failed to find a config directory");

    let mut config_path: PathBuf = base_path;
    config_path.push("pomodoro-gui");

    if !config_path.exists() {
        std::fs::create_dir_all(&config_path).expect("Failed to create the config directory.");
    }

    config_path
}