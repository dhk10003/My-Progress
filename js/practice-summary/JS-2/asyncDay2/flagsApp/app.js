const renderCountry = (data) => {
    // const flag = data.flags.svg;
    // const countryName = data.name.common;
    // const region = data.region;
    // const capital = data.capital;
    // const population = data.population;
    // const languages = data.languages;
  
    const {
      region,
      population,
      capital,
      languages,
      name: { common: countryName },
      flags: { svg: flag },
    } = data;
  
    const countryDiv = document.createElement("div");
    countryDiv.classList =
      "card country-card col-10 col-sm-6 col-lg-3 p-2 mx-2 my-3";
    countryDiv.innerHTML = `
        <img
          src="${flag}"
          class="card-img-top border border-secondary"
          alt="Flag"
        />
        <div class="card-body">
          <h5 class="card-title">${countryName}</h5>
          <p class="card-text">${region}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span><i class="fas fa-2x fa-landmark"></i>${capital}</span>
          </li>
          <li class="list-group-item">
            <span><i class="fas fa-lg fa-users"></i>
            ${(population / 1_000_000).toFixed(2)} M
            </span>
          </li>
          <li class="list-group-item">
            <span><i class="fas fa-lg fa-comments"></i>
            ${Object.values(languages)}
            </span>
          </li>
        </ul>
      `;
  
    const container = document.getElementById("country-container");
    container.appendChild(countryDiv);
  };
  
  const renderError = (msg) => {
    const headerContainer = document.getElementById("header-container");
    const errorHtml = document.createElement("div");
  
    errorHtml.classList.add("alert", "alert-danger", "alert-container");
    errorHtml.innerText = msg;
    headerContainer.insertAdjacentElement("beforeend", errorHtml);
    // errorHtml.remove();
    setTimeout(() => {
      errorHtml.remove();
    }, 3000);
  };

//   our code here:
const viewCountry = async (country) => {
    try{
        // log the input value:
        console.log(country)

        // fetch the data:
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        console.log(response)
        if(!response.ok){
            throw new Error("Country not found")
        }
        const data = await response.json()
        console.log(data)

        renderCountry(data[0]);
    }
    catch(err){
        console.log(err)
        renderError(err)
    }
}

  document.getElementById("search").addEventListener("click", () => {
    const country = document.getElementById("input").value;
    viewCountry(country);
  });
  
  document.getElementById("clear").addEventListener("click", () => {
    const main = document.querySelector("#country-container");
    main.innerHTML = "";
  });
  