// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likeBtns = document.querySelectorAll("span.like-glyph")
  const errorModal = document.getElementById("modal")
  const errorMessage = document.getElementById("modal-message")

  function updateHeart(heart){
    if(heart.classList.contains('activated-heart')){
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
    else {
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
  }

  for(button of likeBtns){
      button.addEventListener("click", (event) => {
        mimicServerCall()
        .then(updateHeart(event.target))
        .catch(function(error) {
          errorMessage.innerText = error.message
          errorModal.classList.remove("hidden")
          setTimeout(function(){  errorModal.classList.add("hidden")}, 5000);
        })
      })
  }
})



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
