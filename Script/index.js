document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", ShowTask);
  let input = document.querySelector(".input");
  let btn = document.querySelector(".btn");
  let list = document.querySelector(".list");
  let tasks;
  if (!localStorage.getItem("Task")) {
    tasks = [];
  } else {
    tasks = gettask();
  }
  function add(text) {
    let element = document.createElement("li");
    element.textContent = text;
    element.innerHTML += `<span class="close"><i class="fa-solid fa-trash"></i></span>`;
    return element;
  }
  btn.addEventListener("click", function start(e) {
    let Matn = input.value;
    if (Matn == "") {
      e.preventDefault();
      return alert("فرم باید پر باشد ");
    }
    let li = add(Matn);
    save(Matn);
    let span = document.querySelector(".close");
    li.classList.add("p");
    list.appendChild(li);
    input.value = "";

    list.addEventListener("click", (e) => {
      if (e.target.nodeName == "I") {
        let target = e.target.parentElement.parentElement;
        target.style = "display : none";
        content = target.textContent;
        tasks.splice(tasks.indexOf(target.textContent) , 1);
        localStorage.setItem("Task" , tasks);
      }
      if (e.target.nodeName == "LI") {
        e.target.classList.toggle("do");
      }
    });
  });

  function save(text) {
    tasks.push(text);
    localStorage.setItem("Task", tasks);
  }
  function gettask() {
    return localStorage.getItem("Task").split(",");
  }
  function ShowTask() {
    for (let i in tasks) {
      let li = add(tasks[i]);
      li.classList.add("p");
      list.appendChild(li);
    }
  }

});
