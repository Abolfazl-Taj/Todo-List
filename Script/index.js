document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector(".input");
  let btn = document.querySelector(".btn");
  let list = document.querySelector(".list");
  function add(text) {
    let element = document.createElement("li");
    element.textContent = text;
    element.innerHTML += `<span class="close"><i class="fa-solid fa-trash"></i></span>`;
    return element;
  }
  btn.addEventListener("click", function start(e) {
    let Matn = input.value;
    if(Matn == ""){
      e.preventDefault()
      return alert("فرم باید پر باشد ")
     }
    let li = add(Matn);
    let span = document.querySelector(".close");
    li.classList.add("p");
    list.appendChild(li);
    input.value = "";
    list.addEventListener("click", (e) => {
      if (e.target.nodeName == "I") {
        e.target.parentElement.parentElement.style = "display : none";
      }
      if (e.target.nodeName == "LI") {
        e.target.classList.toggle("do");
      }
    });
    



  });










});
