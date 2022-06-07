/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function onSubmitButtonPressed() {
    first_day = document.getElementById('first-day-inp').value
    last_day = document.getElementById('last-day-inp').value
    city_to = document.getElementById('city-to-inp').value
    city_from = document.getElementById('city-from-inp').value
    email = document.getElementById('email-inp').value
    comments = document.getElementById('additional-inp').value
    data = {
        'first_day': first_day,
        'last_day': last_day,
        'city_to': city_to,
        'city_from': city_from,
        'email': email,
        'additional': comments
    }

    console.log(data)

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(data);

    return true
}