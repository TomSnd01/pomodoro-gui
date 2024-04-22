use notify_rust::{Notification, Timeout};
use std::io::Cursor;
use std::thread;
use std::io::Write;
use tempfile::NamedTempFile;
use rodio::{Decoder, OutputStream, Source};

const BREAK_SOUND: &'static [u8] = include_bytes!("../../sounds/break_sound.wav");
const WORK_SOUND: &'static [u8] = include_bytes!("../../sounds/work_sound.wav");
const APP_ICON: &[u8] = include_bytes!("../../icons/128x128.png");

#[tauri::command]
pub fn short_break_notification() {
  let mut temp_file = NamedTempFile::new().unwrap();
  temp_file.write_all(APP_ICON).unwrap();
  Notification::new()
    .summary("Time for a break!")
    .body("The focus phase has ended, start your short break")
    .appname("Pomodoro")
    .icon(temp_file.path().to_str().unwrap())
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
  play_break_sound();
}

pub fn long_break_notification() {
  let mut temp_file = NamedTempFile::new().unwrap();
  temp_file.write_all(APP_ICON).unwrap();
  Notification::new()
    .summary("Time for a break!")
    .body("The focus phase has ended, start your long break")
    .appname("Pomodoro")
    .icon(temp_file.path().to_str().unwrap())
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
  play_break_sound();
}

pub fn focus_notification() {
  let mut temp_file = NamedTempFile::new().unwrap();
  temp_file.write_all(APP_ICON).unwrap();
  Notification::new()
    .summary("Get back to work!")
    .body("The break has ended, start working")
    .appname("Pomodoro")
    .icon(temp_file.path().to_str().unwrap())
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
  play_work_sound();
}

fn play_work_sound() {
  thread::spawn(move || {
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    let cursor: Cursor<&[u8]> = Cursor::new(WORK_SOUND.as_ref());
    let source = Decoder::new(cursor).unwrap();
    let secs = source.total_duration().unwrap().as_secs();
    stream_handle.play_raw(source.convert_samples()).unwrap();
    std::thread::sleep(std::time::Duration::from_secs(secs));
  });
}

fn play_break_sound() {
  thread::spawn(move || {
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    let cursor: Cursor<&[u8]> = Cursor::new(BREAK_SOUND.as_ref());
    let source = Decoder::new(cursor).unwrap();
    let secs = source.total_duration().unwrap().as_secs();
    stream_handle.play_raw(source.convert_samples()).unwrap();
    std::thread::sleep(std::time::Duration::from_secs(secs));
  });
}