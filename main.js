// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
const likeButtons = document.querySelectorAll(".like-glyph");
modal.className = "hidden";

likeButtons.forEach(likeButton =>
  likeButton.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        createLike(likeButton);
      })
      .catch(displayModal);
  })
);

const createLike = likeButton => {
  if (likeButton.className == "activated-heart") {
    likeButton.className = "";
    likeButton.innerText = EMPTY_HEART;
  } else {
    likeButton.className = "activated-heart";
    likeButton.innerText = FULL_HEART;
  }
};

const displayModal = err => {
  const modalMessage = document.querySelector("#modal-message");
  modalMessage.innerText = err;
  modal.className = "";
  setTimeout(() => {
    modal.className = "hidden";
  }, 5000);
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
