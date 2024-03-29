use notify_rust::{Notification, Timeout};

fn short_break_notification() {
  Notification::new()
    .summary("Time for a break!")
    .body("The focus phase has ended, start your short break")
    .appname("Pomodoro")
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
}

fn long_break_notification() {
  Notification::new()
    .summary("Time for a break!")
    .body("The focus phase has ended, start your long break")
    .appname("Pomodoro")
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
}

fn focus_notification() {
  Notification::new()
    .summary("Get back to work!")
    .body("The break has ended, start working")
    .appname("Pomodoro")
    .timeout(Timeout::Milliseconds(7500))
    .show().unwrap();
}