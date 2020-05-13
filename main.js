// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtns = document.getElementsByClassName('like-glyph')
const errModal = document.getElementById('modal')
errModal.className = "hidden"

document.addEventListener("DOMContentLoaded", () => {
  for (const like of heartBtns) {
    like.addEventListener('click', function(event){
      let heart = event.target
      if (heart.innerText === EMPTY_HEART) {  
        mimicServerCall()
          .then(() => {
            heart.className += ' activated-heart'
            heart.innerText = `${FULL_HEART}`
          })
          .catch(error => {
            modal.hidden = false
            let errorMsg = document.getElementById("modal-message")
            errorMsg.innerText = error

            setTimeout(() => {
              modal.className = 'hidden'
            }, 5000)
          })
      } else {
        heart.className -= ' activated-heart'
        heart.innerText = `${EMPTY_HEART}`
      }
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
