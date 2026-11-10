var darkBtn = document.getElementById("darkBtn");
var topBtn = document.getElementById("topBtn");
var form = document.getElementById("deliveryForm");

if (localStorage.getItem("mode") == "dark") {
  document.body.classList.add("dark");
  darkBtn.innerText = "Light Mode";
}

darkBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.innerText = "Light Mode";
    localStorage.setItem("mode", "dark");
  } else {
    darkBtn.innerText = "Dark Mode";
    localStorage.setItem("mode", "light");
  }
};

window.onscroll = function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo(0, 0);
};

form.onsubmit = function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var order = document.getElementById("order").value;

  if (name == "" || phone == "" || address == "" || order == "") {
    alert("Please fill all the fields");
    return;
  }

  alert("Thank you " + name + ". We got your order and we will call you soon.");
  form.reset();
};
