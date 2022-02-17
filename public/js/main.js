const cityName = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Please enter city before Search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b6e87d5cdd71ad36c8b9d322b8f9083e`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
              }
              else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea'></i>"
              }
              else if(tempMood == "Rainy"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
              }
              else if(tempMood == "Smoke"){
                temp_status.innerHTML = "<i class='fas fa-smoke' style='color: #eccc68'></i>"
              }
              else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
              }
              datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Please Enter Correct City Name`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click',getInfo);