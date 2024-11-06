ID = "B4XLE2CYZD2JB9KYKH63NJMJ2";
city = "guadalajara";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// fetch(
//   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${ID}`
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(Error("Error: ", error));
//   });

// Async and await

async function getWeather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${ID}`
  );

  const data = await response.json();
  console.log(data);
}

getWeather();
