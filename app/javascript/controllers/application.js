import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

const button = document.querySelector("#click-me")
button.addEventListener("click", (event) => {
  console.log(event);
  event.currentTarget.classList.remove("btn-primary");
  event.currentTarget.classList.add("btn-danger");
  event.currentTarget.innerText = "Bingo!";
})