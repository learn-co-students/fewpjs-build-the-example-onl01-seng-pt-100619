// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(e) {
  let modal = document.getElementById('modal');
  modal.className = "hidden";
  clickLike();
})
let hearts = document.querySelectorAll('li')
function clickLike() {
  hearts.forEach (heartClick => {
    heartClick.addEventListener('click', function(e) {
      if (e.target.classList.contains('activated-heart')) {
        e.target.className = ""
      }
      else {
      // e.preventDefault()
        mimicServerCall()
        
        .then(function(result) {
          e.target.innerText = FULL_HEART;
          e.target.className = 'activated-heart';
        })
        
        .catch(function(error) {
          modal.className = "";
          document.getElementById('modal-message').innerText = error;
          setTimeout(function() {modal.className = "hidden"}, 5000);
        });
      }
    })
  })
}

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
