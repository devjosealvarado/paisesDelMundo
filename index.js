const formulario = document.querySelector('#formulario');
const input_text = document.querySelector('#input-text');
const btn = document.querySelector('#btn');
const countryList = document.querySelector('#lista');

let paises = []

const getPaises = async () => {
    paises = await (await fetch(`https://restcountries.com/v3.1/all`)).json();
}

getPaises();

input_text.addEventListener('input', e => {
    const paisesFiltrados = paises.filter(pais => pais.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()));
    // console.log(paisesFiltrados);



    if (paisesFiltrados.length === 9 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[4].name.common}</li>
        <img src="${paisesFiltrados[4].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[5].name.common}</li>
        <img src="${paisesFiltrados[5].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[6].name.common}</li>
        <img src="${paisesFiltrados[6].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[7].name.common}</li>
        <img src="${paisesFiltrados[7].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[8].name.common}</li>
        <img src="${paisesFiltrados[8].flags.svg}" alt="">
        </div>
        </div>
        `;


    } if (paisesFiltrados.length === 8 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[4].name.common}</li>
        <img src="${paisesFiltrados[4].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[5].name.common}</li>
        <img src="${paisesFiltrados[5].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[6].name.common}</li>
        <img src="${paisesFiltrados[6].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[7].name.common}</li>
        <img src="${paisesFiltrados[7].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 7 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[4].name.common}</li>
        <img src="${paisesFiltrados[4].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[5].name.common}</li>
        <img src="${paisesFiltrados[5].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[6].name.common}</li>
        <img src="${paisesFiltrados[6].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 6 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[4].name.common}</li>
        <img src="${paisesFiltrados[4].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[5].name.common}</li>
        <img src="${paisesFiltrados[5].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 5 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[4].name.common}</li>
        <img src="${paisesFiltrados[4].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 4 ) {
        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[3].name.common}</li>
        <img src="${paisesFiltrados[3].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 3 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[2].name.common}</li>
        <img src="${paisesFiltrados[2].flags.svg}" alt="">
        </div>
        </div>
        `;
    } if (paisesFiltrados.length === 2 ) {

        countryList.innerHTML = `
        <div class="containerUniqueCountry">
        <div class="par">
        <li>${paisesFiltrados[0].name.common}</li>
        <img src="${paisesFiltrados[0].flags.svg}" alt="">
        </div>
        <div class="par">
        <li>${paisesFiltrados[1].name.common}</li>
        <img src="${paisesFiltrados[1].flags.svg}" alt="">
        </div>
        </div>
        `;
    }

    if (paisesFiltrados.length === 1) {



        if (paisesFiltrados[0].capital === undefined) {

            lat = paisesFiltrados[0].latlng[0];
            
            long = paisesFiltrados[0].latlng[1];
            

            const weatherInfo = async() => {
                try {
                    const responseWeater = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=es&appid=a305efb8c52bdd249b267b26eef91154`);
                    const dataWeather = await responseWeater.json();
                    
                    tempActual = dataWeather.main.temp - 273.15;
                    
                    idIconWeather = dataWeather.weather[0].icon;
                    
                    weatherCurrent = dataWeather.weather[0].description;
                    
                    iconWeather = `<img src="http://openweathermap.org/img/wn/${idIconWeather}@2x.png"`
                   
                    
            countryList.innerHTML = `
            <div class="uniqueCountry">
            <li>País: ${paisesFiltrados[0].name.common}</li>
            <img src="${paisesFiltrados[0].flags.svg}" alt="">
            <li>Región: ${paisesFiltrados[0].region}</li>
            <li>Clima actual: ${weatherCurrent}</li>
            <li>Temperatura actual: ${tempActual.toFixed(2)} °C</li>
            <div class="containerImg">${iconWeather}</div>
            </div>
            `
                   


                } catch (error) {
                    console.log('error1');
                }
            }
            weatherInfo();


           

        } else {
            lat = paisesFiltrados[0].latlng[0];
            
            long = paisesFiltrados[0].latlng[1];
            

            const weatherInfo = async() => {
                try {
                    const responseWeater = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=es&appid=a305efb8c52bdd249b267b26eef91154`);
                    const dataWeather = await responseWeater.json();
                    
                    tempActual = dataWeather.main.temp - 273.15;
                    
                    idIconWeather = dataWeather.weather[0].icon;
                    
                    weatherCurrent = dataWeather.weather[0].description;
                    
                    iconWeather = `<img src="http://openweathermap.org/img/wn/${idIconWeather}@2x.png"`

                    
            countryList.innerHTML = `
            <div class="uniqueCountry">
            <li>País: ${paisesFiltrados[0].name.common}</li>
            <img src="${paisesFiltrados[0].flags.svg}" alt="">
             <li>Capital: ${paisesFiltrados[0].capital[0]}</li>
             <li>Región: ${paisesFiltrados[0].region}</li>
             <li>Clima actual: ${weatherCurrent}</li>
             <li>Temperatura actual: ${tempActual.toFixed(2)} °C</li>
             <div class="containerImg">${iconWeather}</div>
             </div>
            `



                } catch (error) {
                    console.log('error1');
                }
            }
            weatherInfo();

            
        }


    }

     if (paisesFiltrados.length > 10) {
        countryList.innerHTML = `
        <p class="serEspecifico">Por favor, sea más especifico con su busquedad</p>
        `;
     }
     if (paisesFiltrados.length === 250 ) {

        countryList.innerHTML = `
       `;
    }


});


