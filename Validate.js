window.addEventListener("load", () => {
  const login = document.querySelector(".container-login");
  login.style.top = 0;
  login.style.opacity = 1;
});

const inpO = document.getElementById("inp-o");
const inpT = document.getElementById("inp-t");
const inp = document.querySelectorAll(".inp");
inpT.disabled = true;
const validarA = () => {
  inpT.disabled = inpO.value.length !== 8;
  if (inpO.value.length === 8) {
    document.querySelector(".check").style.scale = 1;
    inpT.style.opacity = 1;
    inpT.focus();
  } else {
    document.querySelector(".check").style.scale = 0;
    inpT.style.opacity = 0.7;
  }
  validarB();
};
function validarB() {
    if(inpT.value.length >= 9){
        document.querySelector(".check.chk-t").style.scale = 1;
        document.querySelector(".cont-descrip").style.opacity = 1;
    }else{
        document.querySelector(".check.chk-t").style.scale = 0;
        document.querySelector(".cont-descrip").style.opacity = 0.7;
    }
}

inp.forEach((valorInput) => {
  valorInput.addEventListener("keydown", function (e) {
    const valorKey = e.key;
    if (!/^\d*$|^Backspace$/.test(valorKey)) {
      e.preventDefault();
    }
  });
  valorInput.addEventListener("input", validarA);
});
// ENVÍO DE DATOS

const btnEnviar = document
  .querySelector(".btn-e")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.write(inpO.value + "<br>" + inpT.value);
  });
