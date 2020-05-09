// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  heartEvent()
})

function heartEvent (){
  const heartElement = document.getElementsByClassName('like-glyph');
  
    Array.from(heartElement).forEach(element => {
      element.addEventListener('click', function() {
       mimicServerCall().then(function(){
         if (element.className == "activated-heart") {
            element.textContent = EMPTY_HEART;
            element.className = "like-glyph";
         } else {
            element.textContent = FULL_HEART;
            element.className = "activated-heart";
         };
       }).catch(function(error){
         errorDisplay(error)
       })
      })
    });
}

function errorDisplay (error) {
  const errorModal = document.getElementById("modal")
  errorModal.className = "";

  const modalMessage = document.getElementById('modal-message');
  modalMessage.innerText = error;

  function addHidden() {
    errorModal.className = "hidden";
  };
  
  setTimeout(addHidden, 5000 );
};

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
