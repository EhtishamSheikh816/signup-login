const getName = document.querySelector("#name");
const getEmail = document.querySelector("#email");
const getPass = document.querySelector("#password");
const getUser = document.querySelector("#usr");

const signUp = () => {
  if (getName.value && getEmail.value && getPass.value) {
    localStorage.setItem("name", getName.value);
    localStorage.setItem("email", getEmail.value);
    localStorage.setItem("password", getPass.value);

    Swal.fire({
      title: "Success!",
      text: `Hello ${getName.value}! You successfully signed up.`,
      icon: "success",
    }).then(() => {
      location.href = "login.html";
    });

    getName.value = "";
    getEmail.value = "";
    getPass.value = "";
  } else {
    Swal.fire({
      title: "Oops...",
      text: "Please fill in all fields!",
      icon: "error",
    });
  }
};

const logIn = () => {
  const eqEmail = getEmail.value === localStorage.getItem("email");
  const eqPass = getPass.value === localStorage.getItem("password");

  if (eqEmail && eqPass) {
    Swal.fire({
      title: "Welcome!",
      text: `Hello ${localStorage.getItem(
        "name"
      )}! You successfully logged in.`,
      icon: "success",
    }).then(() => {
      location.href = "dashboard.html";
    });
  } else {
    Swal.fire({
      title: "Oops...",
      text: "Something went wrong!",
      icon: "error",
    });

    getEmail.value = "";
    getPass.value = "";
  }
};
getUser.innerHTML = localStorage.getItem("name");

const logOut = () => {
  Swal.fire({
    title: "Goodbye!",
    text: `See you again ${localStorage.getItem("name")}!`,
    icon: "success",
  }).then(() => {
    location.href = "index.html";
  });
};
