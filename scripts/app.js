console.log("hey i m connected");
document.getElementById("kbd-wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("kbd")) {
    makeFocuse(e);
    handleDecrement('total-seat');
    addforCalculations(e)
  }
});
