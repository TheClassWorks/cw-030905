let username = document.getElementById("userName");
let pass = document.getElementById("Password");
let msg = document.getElementById("msg");
function formValidation() {
 usr= username.value.trim();
  if (usr.length <= 8) {
    msg.innerText = "حداقل نام کاربری 8 کاراکتر";
    msg.style.display = "block";
  }

  setTimeout(function () {
    msg.style.display = "none";
  }, 2000);
}
