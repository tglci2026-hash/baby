document.addEventListener("DOMContentLoaded", function () {

  let balanceVisible = true;

  const balanceElement = document.getElementById("balance");
  const toggleBtn = document.getElementById("toggleBalance");

  toggleBtn.addEventListener("click", () => {
    if (balanceVisible) {
      balanceElement.innerText = "****";
    } else {
      balanceElement.innerText = "0 BCC";
    }
    balanceVisible = !balanceVisible;
  });

  const notification = document.querySelector(".icon");

  notification.addEventListener("click", () => {
    alert("Aucune notification");
  });

  const actions = document.querySelectorAll(".action");

  actions.forEach(action => {
    action.addEventListener("click", () => {
      alert("Bientôt disponible");
    });
  });

});
