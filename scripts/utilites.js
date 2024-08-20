function makeFocuse(e) {
  e.target.style.backgroundColor = "#1DD100";
  e.target.style.color = "#dddddd";
}
function handleDecrement(element) {
  const totalSeatElement = document.getElementById(element);
  document.getElementById(element).innerHTML =
    parseInt(totalSeatElement.innerText) - 1;
}
function addToTable(e) {
  const seatNumber = e.target.innerText;
  const tablerow = document.createElement("tr");
  tablerow.innerHTML = `<td>${seatNumber}</td>
   <td class="uppercase">classic</td>
   <td>
     <span
       id="ticket-price"
       class="font-bold text-blue-500"
     >
       550
     </span>
     <span class="text-xl font-bold">৳</span>
   </td>`;

  document.getElementById("table-body").appendChild(tablerow);
}

function handleTotalPrice() {
  const totalPricespan = document.getElementById("total-price");
  const grandTotal = document.getElementById("grand-total");
  totalPricespan.innerHTML = parseInt(totalPricespan.innerText) + 550;
  grandTotal.innerHTML = parseInt(document.getElementById("total-price").innerText);
}
