var btn = document.querySelector("#btn");

btn.addEventListener("click",() => {
  var first_name = document.querySelector("#first-name").value;
  var last_name = document.querySelector("#last-name").value;
  var f_name = document.querySelector("#f-name").value;
  var m_name = document.querySelector("#m-name").value;
  var user_location = document.querySelector("#user-location").value;
  var user_district = document.querySelector("#user-district").value;
  console.log(first_name);

  var user_first_name = document.querySelector("#user-first-name");
  var user_last_name = document.querySelector("#user-last-name");
  var user_f_name = document.querySelector("#user-f-name");
  var user_m_name = document.querySelector("#user-m-name");
  var user_location_name = document.querySelector("#user-locations");
  var user_districts = document.querySelector("#user-districts");

  user_first_name.textContent = first_name;
  user_last_name.textContent = last_name;
  user_f_name.textContent = f_name;
  user_m_name.textContent = m_name;
  user_location_name.textContent = user_location;
  user_districts.textContent = user_district;
});
