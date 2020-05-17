// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".like")
  console.log(heartButtons);
  for (const heartButton of heartButtons) {
    heartButton.addEventListener("click", () => {
      mimicServerCall().then(() => {
        var span = heartButton.querySelector(".like-glyph");
        if (span.textContent == EMPTY_HEART) {
          span.textContent = FULL_HEART;
          span.classList.add("activated-heart");
          console.log("we're in");
        } else {
          span.textContent = EMPTY_HEART;
          span.classList.remove("activated-heart");
          console.log("unlike");
        }
      }).catch(() => {
        var modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        setTimeout(function () {
          modal.classList.add("hidden");
        }, 5000);
        console.log("else fail");
      });
    });
    console.log("hearts");
  }
  // debugger

});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}