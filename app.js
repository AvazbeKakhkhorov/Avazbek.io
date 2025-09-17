let items = document.getElementsByTagName("li");

document.getElementById("burger").onclick = (event) => {
  document.querySelector("ul").classList.toggle("show");
};

for (let i = 0; i < items.length; i++) {
  const element = items[i];
  // console.log(element);
  element.addEventListener("click", function (e) {
    let ul = element.parentElement;

    ul.classList.toggle("show");
  });
}

let label = document.querySelectorAll("form label");

for (let index = 0; index < label.length; index++) {
  const labels = label[index];
  let inp = labels.children[0];
  // console.log(inp);

  inp.onfocus = (a) => {
    if (inp.value == "") {
      inp.style.boxShadow = "0 0 5px 0 #61dafb";
    }
  };
}
