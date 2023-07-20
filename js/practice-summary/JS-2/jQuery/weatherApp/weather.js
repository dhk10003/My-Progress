const form = $("form")[0]
const input = $("input")[0]
const message = $(".msg")[0]
const list = $('.cities')[0]

$(document).ready(function () {
    console.log(form)
    console.log(input)
    console.log(message)
    console.log(list)


    const API_KEY = "4d8fb5b93d4af21d66a2948710284366"

    $(form).on("submit", function (e) {
        e.preventDefault()
        getWeather($(input).val())
    })

    // onchange for testing:
    $(input).change(function () {
        console.log($(input).val())
        console.log($(input))
        // the jquery method returns an array of the element
        console.log($(input)[0].value)
    })

    async function getWeather(city) {
        weatherType = "metric"
        console.log(city + " Weather")
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${weatherType}&lang=tr`;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: (data) => {
                console.log(data)
                const { main, name, sys, weather } = data;

                // the find method returns a list of decendants of the element
                const cityListItems = $(list).find(".city")
                console.log(cityListItems)
                // this selector will return an array of ALL elements with the city class
                const cityListItems2 = $(".city")
                console.log(cityListItems2)
                const cityListItemArray = Array.from(cityListItems)

                if (cityListItemArray.length > 0) {
                    const filteredArray = cityListItemArray.filter((card) => $(card).find(".city-name span").text() == name);
                    if (filteredArray.length > 0) {
                        $(message).text(`You already know the weather for ${name}, Please search for another city 😉`);
                        setTimeout(() => {
                            $(message).text("");
                        }, 5000);
                        form.reset();
                        $(input).focus();
                        return;
                    }
                }

                console.log(weather[0].icon);

                const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
                //alternative iconUrl
                // const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
                console.log(iconUrl);

                //   Jquery:
                const createdCityCardLi = $(document.createElement("li"));
                //   Vanilla JS:
                const createdCityCardLi2 = document.createElement("li");

                //   because we are using jquery, we can use the jquery methods on the created element:
                createdCityCardLi.addClass("city");

                //   vanilla JS:
                createdCityCardLi2.classList.add("city");

                const createdCityCardLiInnerH = `
                    <h2 class="city-name" data-name="${name}, ${sys.country}">
                        <span>${name}</span>
                        <sup>${sys.country}</sup>
                    </h2>
                    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                    <figure>
                        <img class="city-icon" src="${iconUrl}">
                        <figcaption>${weather[0].description}</figcaption>
                    </figure>`;

                // jquery method to add html to the element:
                createdCityCardLi.html(createdCityCardLiInnerH);

                //   vanilla JS:
                createdCityCardLi2.innerHTML = createdCityCardLiInnerH;

                //   JQ li:
                console.log(createdCityCardLi);

                //   vanilla li:
                console.log(createdCityCardLi2);

                // appending with jquery:
                $(list).append(createdCityCardLi);

                // appending with vanilla JS:
                // list.appendChild(createdCityCardLi2);

                //reset form:
                form.reset();

                // clear message text:
                // JQ:
                $(message).text("");
                // vanilla JS:
                // message.textContent = "";

                // jQ focus on input:
                $(input).focus();

            },
            // callback function that is called before the request is sent:
            beforeSend: function (request) {
                console.log("right before sending ajax request");
            },
            // callback function that is called when the request is completed:
            // this function is called after success and error functions:
            complete: () => {
                console.log("ajax send request finished");
            },
            // callback function that is called when the request fails:
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown); 
                console.log(XMLHttpRequest);
                // $(message)
                // $('.msg')
                $(message).text(XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
                setTimeout(() => {
                    $(message).text("");
                }, 5000);
                form.reset();
                $(input).focus();

                if (XMLHttpRequest.readyState == 4) {
                    // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
                    console.log("HTTP 400 error")
                }
                else {
                    // something weird is happening
                    console.log("something weird is happening")
                }

            }

        })
    }

})

