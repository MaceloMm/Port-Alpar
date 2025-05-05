const app = angular.module('weatherAPP', []);
const apiKey = "52c34bb1fec8a47fe2676ce765d114b5";
const lang = "pt_br";
const units = "metric";


app.controller('WeatherController', function ($scope, $http) {
    $scope.cityName = '';
    $scope.city = '';
    $scope.cardActive = false;
    $scope.temperature = "";
    $scope.feelsLike = "";
    $scope.minTemperature = "";
    $scope.maxTemperature = "";
    $scope.humidity = "";
    $scope.windVelocity = "";
    $scope.windOrietation = "";
    $scope.iconURL = "";

    $scope.callAPI = async () => {
        const city = $scope.city || localStorage.getItem('city') || 'São Paulo';

        const reponse = await $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`)
        const data = reponse.data;
        const icon = data.weather[0].icon;

        $scope.cityName = data.name;
        $scope.iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        $scope.temperature = Math.round(data.main.temp);
        $scope.feelsLike  = Math.round(data.main.feels_like);
        $scope.minTemperature = Math.round(data.main.temp_min);
        $scope.maxTemperature = Math.round(data.main.temp_max);
        $scope.humidity = data.main.humidity.toLocaleString();
        $scope.windVelocity = data.wind.speed.toLocaleString();
        $scope.windOrietation = data.wind.deg.toLocaleString();
        $scope.cardActive = true;
        localStorage.setItem('city', data.name);
        $scope.$apply();
    }

    $scope.callAPI()
})