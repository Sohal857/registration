function validateform(){
var username=document.myform.username.value;
var email=document.myform.email.value;
var first_name=document.myform.first_name.value;
var last_name=document.myform.last_name.value;
var password=document.myform.password.value;
var confirm_password=document.myform.confirm_password.value;
var phone_number=document.myform.phone_number.value;
var street_address=document.myform.street_address.value;
var country=document.myform.country.value;
var city=document.myform.city.value;
var zip_code=document.myform.zip_code.value;
var state=document.myform.state.value;

var special = /[^a-zA-Z\d]/;
var letter = /[a-zA-Z]/;
var number = /[0-9]/;

if (username==null || username==""){
  document.getElementById("message1").innerHTML = "*This field is required";
  return false;
}
else if(email==null || email==""){
  document.getElementById("message2").innerHTML = "*This field is required";
  return false;
}
else if(first_name==null || first_name==""){
  document.getElementById("message3").innerHTML = "*This field is required";
  return false;
}
else if(last_name==null || last_name==""){
  document.getElementById("message4").innerHTML = "*This field is required";
  return false;
}
else if(password.length<8 || !letter.test(password)|| !number.test(password)|| !special.test(password)){
  alert("Password must be filled and it should contain at least 8 characters, one lowercase character, one uppercase character, one special character, one numeric character!");
  return false;
}
else if(password!=confirm_password){
  alert("password must be same!");
  return false;
}
// / || password.match == /[a-z]/ || password.match == /[A-Z]/ || password.match == /[0-9]/ || password.match == /[^a-zA-Z\d]/
else if(phone_number==null || phone_number==""){
  document.getElementById("message5").innerHTML = "*This field is required";
  return false;
}
else if(country==null || country==""){
  document.getElementById("message6").innerHTML = "*This field is required";
  return false;
}
else if(street_address==null || street_address==""){
  document.getElementById("message7").innerHTML = "*This field is required";
  return false;
}
else if(city==null || city==""){
  document.getElementById("message8").innerHTML = "*This field is required";
  return false;
}
else if(zip_code==null || zip_code==""){
  document.getElementById("message9").innerHTML = "*This field is required";
  return false;
}
else if(state==null || state==""){
  document.getElementById("message10").innerHTML = "*This field is required";
  return false;
}
return true;
}

var countryObject = {
  "Canada": {
    "Alberta": [],
    "British Columbia": [],
    "Manitoba": [],
    "New Brunswick": [],
    "Newfoundland": [],
    "Northwest Territories": [],
    "Nova Scotia": [],
    "Nunavut": [],
    "Ontario": [],
    "Prince Edward Island": [],
    "Quebec": [],
    "Saskatchewan": [],
    "Yukon": [],
  },
  "USA": {
    "Alabama": [],
    "Alaska": [],
    "Arizona": [],
    "Arkansas": [],
    "California": [],
    "Colorado": [],
    "Connecticut": [],
    "Delaware": [],
    "District of Columbia": [],
    "Florida": [],
    "Georgia": [],
    "Hawaii": [],
    "Idaho": [],
    "Illinois": [],
    "Indiana": [],
    "Iowa": [],
    "Kansas": [],
    "Kentucky": [],
    "Louisiana": [],
    "Maine": [],
    "Maryland": [],
    "Massachusetts": [],
    "Michigan": [],
    "Minnesota": [],
    "Mississippi": [],
    "Missouri": [],
    "Montana": [],
    "Nebraska": [],
    "Nevada": [],
    "New Hampshire": [],
    "New Jersey": [],
    "New Mexico": [],
    "New York": [],
    "North Carolina": [],
    "North Dakota": [],
    "Ohio": [],
    "Oklahoma": [],
    "Oregon": [],
    "Pennsylvania": [],
    "Rhode Island": [],
    "South Carolina": [],
    "South Dakota": [],
    "Tennessee": [],
    "Texas": [],
    "Utah": [],
    "Vermont": [],
    "Virginia": [],
    "Washington": [],
    "West Virginia": [],
    "Wisconsin": [],
    "Wyoming": [],
  },
}
window.onload = function() {
  var countries = document.getElementById("country");
  var states = document.getElementById("state");
  for (var x in countryObject) {
    countries.options[countries.options.length] = new Option(x, x);
  }
  countries.onchange = function() {
    //empty state - dropdowns
    states.length = 1;
    //display correct values
    for (var y in countryObject[this.value]) {
      states.options[states.options.length] = new Option(y, y);
    }
  }
}
