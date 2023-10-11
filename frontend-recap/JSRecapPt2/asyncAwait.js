async function fetchData(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const data = "Some data from the server";
            resolve(data);
        }, 1000);
        console.log("HELLO!")
    });
}

async function process() {
    try {
        const data = await fetchData("https://example.com/api/data");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

process();