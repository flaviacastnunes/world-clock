function updateTime() {let londonElement = document.querySelector("#london");
    if(londonElement){
    
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");  
      londonDateElement.innerHTML = moment().tz("Europe/London").format("MMMM	Do YYYY");
      londonTimeElement.innerHTML = moment().tz("Europe/London").format(
        "h:mm:ss [<small>]A[</small>]"
      );}
  
    let parisElement = document.querySelector("#paris");
    if(parisElement){
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
    let lisbonElement = document.querySelector("#lisbon");
    if(lisbonElement){
      let lisbonDateElement = lisbonElement.querySelector(".date");
      let lisbonTimeElement = lisbonElement.querySelector(".time");
      let lisbonTime = moment().tz("Europe/Lisbon");
  
      lisbonDateElement.innerHTML = lisbonTime.format("MMMM	Do YYYY");
      lisbonTimeElement.innerHTML = lisbonTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }}
  
    updateTime();
    setInterval(updateTime, 1000);

  let cityElement = document.querySelector("#city");
  cityElement.addEventListener("change", changeCity);

  function changeCity(event) {
    let cityTimeZone = event.target.value; 
    if(cityTimeZone=== "current"){
      cityTimeZone = moment.tz.guess();
    }
    let timeZone = moment().tz(cityTimeZone);
    let cityName= cityTimeZone.replace("_", " ").split("/")[1];
    let cities = document.querySelector("#cities");
    cities.innerHTML=
    `<div class="city">    
    <h2>${cityName}</h2>
    <div class="date">${timeZone.format("MMMM	Do YYYY")}</div>
    <div class="time">${timeZone.format("h:mm:ss [<small>]A[</small>]")}</div>
</div>
<div><a href="index.html">See all cities</a></div><br>`
  }