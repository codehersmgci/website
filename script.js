function check(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var correct = 0;
  
  var pictures = ["https://cdn.glitch.me/7a02a6a7-ea9d-42ad-8731-471323897892%2Ffox%20happ.jpg?v=1639005730936", 
                  "https://cdn.glitch.me/7a02a6a7-ea9d-42ad-8731-471323897892%2Fmad%20fox.jpg?v=1639005732005"];
  var messages = ["nice job !","boo"];
  
  if (question1 == "an animal"){
    correct++;
  }
  
  if (question2 == "orange"){
    correct++;
  }
  
  if (correct>=1){
    document.getElementById("message").innerHTML = messages[0];
    document.getElementById("picture").src = pictures[0];
  }
  
  if (correct<1){
    document.getElementById("message").innerHTML = messages[1];
    document.getElementById("picture").src = pictures[1];
  }
  
  document.getElementById("after_submit").style.visibility = "visible";
  
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

