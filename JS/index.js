function updateTime() {
  let sarasotaElement = document.querySelector("#sarasota");
  if (sarasotaElement) {
    let sarasotaDateElement = sarasotaElement.querySelector(".date");
    let sarasotaTimeElement = sarasotaElement.querySelector(".time");
    let sarasotaTime = moment().tz("America/New_York");

    sarasotaDateElement.innerHTML = sarasotaTime.format("MMMM	Do YYYY");
    sarasotaTimeElement.innerHTML = sarasotaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
}

let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML =`
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
        "A"
      )}</small></div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
