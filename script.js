function QuestionFunction(){
  var password=document.getElementById("Question");
  var passwordText=password.value.toUpperCase();
  if(passwordText == "NINE"){
    return true;
  }
  alert("No you fool. How embarrassing.");
  return false; 
  }