//references of elements

// input
// reminder that getElementsByTagName returns an array:
const text = document.getElementsByTagName("input")[0]
text.focus()

// msg
const msg = document.querySelector(".msg")

// list of cities
const cities = document.querySelector(".cities")


// form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    getWeather(text.value)
    e.target.reset()
    text.focus()
    msg.textContent = ""
})

const getWeather = async (city) => {
    // unit type:
    let unitType = document.getElementById('unitType').value
    
    // city = text.value
    console.log(`getting weather for ${city}...`)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=${unitType}`;

    // try to get data from api:
    try {
        const response = await axios.get(url)
        console.log(response)
        const data = response.data

        // destructuring:
        const { main, weather, sys, name } = data

        // check if city already exists:
        const cityListItems = cities.querySelectorAll('.city')
        const cityArray = Array.from(cityListItems)
        console.log(cityArray)
        
        if(cityArray.length > 0){
            console.log('we have cities')
            // how to filter an array with multiple conditions:
            const filtered = cityArray.filter(
                item=>
                item.querySelector('.city-name span').innerText==name
                &&
                item.querySelector('.city-temp sup').innerText == (unitType=="metric"?"°C":"°F"))
            console.log(filtered)
            if(filtered.length > 0){
                console.log("we already know this city")
                msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`
                // we already have this city
                return;
            }
        }

        // create list item:
        const li = document.createElement("li")
        // add class of city:
        li.classList.add("city")
        // add innerHTML:
        li.innerHTML =
        `
        <h2 class="city-name" data-name="${name}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">
            ${main.temp}
            <sup>${unitType === "metric"?"°C":"°F"}</sup>
        </div>
        <figure>
            <img class="city-icon" 
            src=${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`}
            alt=${weather[0].description}>
            <figcaption>${weather[0].description}</figcaption>
        </figure>

        `
        
        cities.appendChild(li)
    }

    catch (error){
        msg.innerText=error
        // console.log(error)
    }

}
