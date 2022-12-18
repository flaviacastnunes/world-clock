function updateTime() {
    let londonElement = document.querySelector("#london");
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");  
      londonDateElement.innerHTML = moment().tz("Europe/London").format("MMMM	Do YYYY");
      londonTimeElement.innerHTML = moment().tz("Europe/London").format(
        "h:mm:ss [<small>]A[</small>]"
      );
  
    let parisElement = document.querySelector("#paris");
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
  
  updateTime();
  setInterval(updateTime, 1000);
  