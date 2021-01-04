function validateform(){
var username=document.myform.username.value;
var email=document.myform.email.value;
var first_name=document.myform.first_name.value;
var last_name=document.myform.last_name.value;
var password=document.myform.password.value;
var confirm_password=document.myform.confirm_password.value;
var phone_number=document.myform.phone_number.value;
var street_number=document.myform.street_number.value;
var street_name=document.myform.street_name.value;
var city=document.myform.city.value;
var zip_code=document.myform.zip_code.value;
var country=document.myform.country.value;
var state=document.myform.state.value;

if (username==null || username==""){
  alert("Username cannot be blank");
  return false;
}

if(first_name==null || first_name==""){
  alert("First name cannot be blank");
  return false;
}
if(last_name==null || last_name==""){
  alert("Last name cannot be blank");
  return false;
}
if(password.length<6){
  alert("Password must be at least 6 characters long.");
  return false;
}
if(phone_number==null || phone_number==""){
  alert("Phone No cannot be blank");
  return false;
}
}
// else if(website.length<6){
//   alert("Password must be at least 6 characters long.");
//   return false;
// }
// else if(website.length<6){
//   alert("Password must be at least 6 characters long.");
//   return false;
// }
// else if(website.length<6){
//   alert("Password must be at least 6 characters long.");
//   return false;
// }
// else if(website.length<6){
//   alert("Password must be at least 6 characters long.");
//   return false;
// }
// else if(website.length<6){
//   alert("Password must be at least 6 characters long.");
//   return false;
// }
//


// function random_function()
//  {
//      var a=document.getElementById("input").value;
//      if(a==="CANADA")
//      {
//          var arr=["Alberta","Manitoba"];
//      }
//      else if(a==="USA")
//      {
//          var arr=["Washington","Texas","New York"];
//      }
//
//      var string="";
//
//      for(i=0;i<arr.length;i++)
//      {
//          string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
//      }
//      document.getElementById("output").innerHTML=string;
//  }
