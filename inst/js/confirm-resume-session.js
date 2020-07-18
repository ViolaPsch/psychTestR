var skip_confirm = false;

confirm_resume_session = function() {
  if (confirm("Resuming ongoing testing session.\n" +
               "Please click 'OK' to confirm, " +
               "or click 'Cancel' to restart as a new user.") || skip_confirm) {
    return(true);
  } else {
    hide_content();
    reset_p_id_and_refresh_browser();
  }
};
