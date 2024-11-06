function getData(value) {
  return new Promise(function (resolve, reject) {
    if (value === "/getData") {
      const data = {
        name: "Oswaldo",
        lastName: "Gonzalez",
        subject: "Promises",
      };
      resolve(data);
    } else {
      reject("No Success");
    }
  });
}

const prueba = getData("/getData")
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(Error("Wrong Parameter", error));
  });
