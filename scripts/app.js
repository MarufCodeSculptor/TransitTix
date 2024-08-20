console.log("hey i m connected");
document.getElementById("total-price").innerHTML = 0;
let userSelected = 0;
document.getElementById("kbd-wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("kbd")) {
    userSelected += 1;
    if (userSelected > 4) {
      alert("You can't select more than 4 seats");
      return;
    }
    if (userSelected === 4) {
      document.getElementById("coupon-button").disabled = false;
    }

    makeFocuse(e);
    handleDecrement("total-seat");
    addToTable(e);
    handleTotalPrice();
  }
});

document.getElementById("coupon-button").addEventListener("click", () => {
  const coupon = document.getElementById("coupon-input").value;
  console.log("coupon is ", coupon);
  const condition1 = coupon.toLowerCase() === "couple20";
  const condition2 = coupon.toLowerCase() === "new15";
  if (condition1 || condition2) {
    let totalPrice = parseInt(document.getElementById("total-price").innerText);
    if (condition1) {
      const couponedPrice = totalPrice * 0.8;
      document.getElementById("grand-total").innerText = couponedPrice;
    }
    if (condition2) {
      const couponedPrice = totalPrice * 0.85;
      document.getElementById("grand-total").innerText = couponedPrice;
    }
    document.getElementById("coupon-input").value = "";
    document.getElementById("coupon-button").disabled = true;
  } else {
    alert("no coupon found");
  }
});

function checkInputs() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const submitButton = document.getElementById("submitButton");

  // Enable the submit button if all inputs are filled
  if (input1 && input2 && input3) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
