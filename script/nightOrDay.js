function setThemePreference() {
    var d = new Date();
    /*
    * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
    * Day = 0 - 11
    * Night = 12 - 23
    */
    var currentHour = d.getHours();
  
    /*
    * The dark theme load early morning and night
    * The light theme load morning and evening
    */
  
    if(currentHour >= 19 || currentHour <= 6) {
      document.body.setAttribute("data-theme", "dark_theme") 
    }else {
      document.body.setAttribute("data-theme", "light_theme") 
    }
  }
  
  window.onload = setThemePreference;