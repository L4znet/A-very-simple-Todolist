let title = document.querySelector(".title");
let description = document.querySelector(".description");
let validation = document.querySelector(".validation");
let contentlist = document.querySelector(".content-list");
let preview = document.querySelector(".preview");
let form = document.querySelector("form");
let preview_title = document.querySelector(".preview-title");
let preview_text = document.querySelector(".preview-text");

title.addEventListener("input", function (e) {
  preview_title.innerHTML = e.target.value;
});

description.addEventListener("input", function (e) {
  preview_text.innerHTML = e.target.value;
});

function removeItem(id) {
  let task = document.querySelector("." + id);
  task.remove();
}

let compter = 0;

validation.addEventListener("click", function (e) {
  if (title.value != "" && description.value != "") {
    const li = document.createElement("li");
    const b_title = document.createElement("b");
    const a_delete = document.createElement("a");
    const span_text = document.createElement("span");

    compter += 1;

    li.setAttribute("class", "task_" + compter);
    a_delete.setAttribute("id", "task_" + compter);
    a_delete.setAttribute("class", "delete_btn");
    let newTitle = document.createTextNode(title.value);
    let newText = document.createTextNode(description.value);
    let deleteText = document.createTextNode("❌");
    b_title.appendChild(newTitle);
    span_text.appendChild(newText);
    a_delete.appendChild(deleteText);

    a_delete.addEventListener("click", function () {
      let id = this.getAttribute("id");
      removeItem(id);
    });

    li.appendChild(b_title);
    li.appendChild(span_text);
    li.appendChild(a_delete);

    contentlist.appendChild(li);
    form.reset();
    preview_title.innerHTML = "";
    preview_text.innerHTML = "";
  }
});

document.querySelector(".panic").addEventListener("click", function () {
  document.querySelector("main").remove();
  const img = document.createElement("img");
  img.setAttribute("src", "tenor.gif");
  document.body.appendChild(img);
});
