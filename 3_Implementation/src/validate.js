
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms["myForm"]["pass"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  if (y == "") {
    alert("Password must be filled out");
    return false;
  }
}

function validateForm1() {
  
  var email = document.forms["myForm1"]["email"].value;
  var uname = document.forms["myForm1"]["uname"].value;
  var rpass = document.forms["myForm1"]["rpass"].value;
  var cpassword = document.forms["myForm1"]["cpassword"].value;
  var inputtxt = document.forms["myForm1"]["inputtxt"].value;
  var phoneno = /^\d{10}$/;
  
  
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (uname == "") {
    alert("Username must be filled out");
    return false;
  }

  if (rpass!=cpassword) {
    alert("Check password and confirmpassword");
    return false;
  }
  
   if((inputtxt.value.match(phoneno)))
   {     
      return true;
   }    
  else
        {
        alert("mobile number must have 10 digits");
        return false;
        }


}

function run(){
  alert("Thanks for contacting us.. We will contact you soon");
}
