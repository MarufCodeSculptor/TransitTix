function makeFocuse(e) {
  e.target.style.backgroundColor = "#1DD100";
  e.target.style.color = "#dddddd";
}
function handleDecrement(element) {
  const totalSeatElement = document.getElementById(element);
  document.getElementById(element).innerHTML =
    parseInt(totalSeatElement.innerText) - 1;
}
function addforCalculations(e) {
  const seatNumber = e.target.innerText;
  const tablerow = document.createElement("tr");
  tablerow.innerHTML = `<td>${seatNumber}</td>
   <td class="uppercase">classic</td>
   <td>
     <span
       id="ticket-price"
       class="font-bold text-blue-500"
     >
       500
     </span>
     <span class="text-xl font-bold">৳</span>
   </td>`;

  document.getElementById("table-body").appendChild(tablerow);

  
}
