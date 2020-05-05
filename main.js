// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(e){
  let errorModal = document.getElementById("modal")
  errorModal.className = "hidden"
// event listener can take an event a function or parenthesis
  let like1 = document.getElementById("201811189").children[2].children[0].children[0]
  let likes = document.querySelectorAll("li")
  likes.forEach(like1 => {
    like1.addEventListener("click", function(event) {
      mimicServerCall()
      .then(response => {
        event.target.className = "activated-heart"
        event.target.innerText= `${FULL_HEART}`
    })
      .catch(error => {
        errorModal.innerText = error
        errorModal.className = ""
      });
    });
  });
  
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
