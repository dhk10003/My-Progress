function fetchData(url) {
    return new Promise(function (resolve, reject) {
      // Simulate an asynchronous network request
      setTimeout(function () {
        const data = "Some data from the server";
        resolve(data); // Resolve the Promise with data
        // or reject with an error: reject("An error occurred");
      }, 1000);
    });
  }
  
  fetchData("https://example.com/api/data")
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });