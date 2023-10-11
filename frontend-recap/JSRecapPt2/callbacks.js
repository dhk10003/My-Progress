//Callbacks:

function fetchData(url, callback) {
    // Simulate an asynchronous network request
    setTimeout(function () {
      const data = "Some data from the server";
      callback(data);
    }, 1000);
  }
  
  fetchData("https://example.com/api/data", function (data) {
    console.log(data);
  });