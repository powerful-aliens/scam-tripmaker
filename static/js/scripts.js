// powerful-aliens code copyright
// 

function onSubmitButtonPressed() {
  let data = get_input_data()
  send_data_to_server(data)
  show_sorry_text()
}

function get_input_data() {
  let first_day = document.getElementById("first-day-inp").value;
  let last_day = document.getElementById("last-day-inp").value;
  let city_to = document.getElementById("city-to-inp").value;
  let city_from = document.getElementById("city-from-inp").value;
  let email = document.getElementById("email-inp").value;
  let comments = document.getElementById("additional-inp").value;

  return {
    first_day: first_day,
    last_day: last_day,
    city_to: city_to,
    city_from: city_from,
    email: email,
    additional: comments,
  };
}

function send_data_to_server(data) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onload = () => console.log(xhr.responseText);
  xhr.send(JSON.stringify(data));
}

function show_sorry_text() {
  let sorry_text = document.getElementById("sorry-text")
  sorry_text.className = sorry_text.className.replace("d-none", "d-block")
}
