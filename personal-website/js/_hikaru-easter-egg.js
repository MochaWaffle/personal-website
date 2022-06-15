/*function hikaruBackground() {


    if (document.getElementById("bg-image") == "https://i.pinimg.com/474x/0b/bb/17/0bbb17400498e6ce931e781afca667d0.jpg") {
        //  block of code to be executed if the condition is true
        document.getElementById("bg-image").src = 'img/hikaru.jpeg';
      } else {
        //  block of code to be executed if the condition is false
        document.getElementById("bg-image").src = 'https://i.pinimg.com/474x/0b/bb/17/0bbb17400498e6ce931e781afca667d0.jpg';
      }


    
}   
*/
function hikaruBackground() {


    if (document.getElementsByClassName("bg-image").src == "https://i.pinimg.com/474x/0b/bb/17/0bbb17400498e6ce931e781afca667d0.jpg") {
        //  block of code to be executed if the condition is true
        document.getElementsByClassName("bg-image").src = 'img/hikaru.jpeg';
      } else {
        //  block of code to be executed if the condition is false
        document.getElementsByClassName("bg-image").src = 'https://i.pinimg.com/474x/0b/bb/17/0bbb17400498e6ce931e781afca667d0.jpg';
      }


    
}   