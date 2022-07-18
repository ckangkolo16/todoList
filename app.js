let addbutton = document.getElementById("addtolist");

addbutton.addEventListener("click", function () {
  let container = document.getElementById("form-container");
  let listItem = document.getElementById("listitem");
  let paragraph = document.createElement("p");
  let checkbox = document.createElement("input");
  let div = document.createElement("div");
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");

  paragraph.setAttribute("class", "text");
  editBtn.innerHTML = "e ";
  delBtn.innerHTML = "x ";
  editBtn.className = "btn edit";
  delBtn.className = "btn del";
  container.appendChild(div);
  div.className = "rowdiv";
  div.appendChild(paragraph);
  div.append(checkbox);
  div.appendChild(editBtn);
  div.appendChild(delBtn);
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  //sets p text to input value
  paragraph.innerText = listItem.value;
  listItem.value = "";

  delBtn.addEventListener("click", function () {
    container.removeChild(div);
  });

  editBtn.addEventListener("click", function () {
    // console.log(`this paragraph value ${paragraph.innerText} `);

    //two ways to edit text 1) found attribute which makes texts editable
    paragraph.contentEditable = true;

    //two ways to edit text 2) shows value in the input box when edit is clicked
    listItem.value = paragraph.innerText;

    paragraph.style.backgroundColor = "rgba(245, 245, 245, 0.596)";

    let saveBtn = document.createElement("button");
    saveBtn.innerHTML = "s";
    saveBtn.className = "save";
    saveBtn.style.color = "green";
    let parent = this.parentNode;
    // console.log(parent);
    delBtn.style.left = "-6px";
    editBtn.style.left = "-10px";
    checkbox.style.left = "400px";

    parent.appendChild(saveBtn);

    saveBtn.addEventListener("click", function () {
      paragraph.contentEditable = false;
      paragraph.style.backgroundColor = "rgba(202, 198, 198, 0.372)";
      this.parentNode.removeChild(saveBtn);

      let toDoList = JSON.parse(localStorage.getItem("list"));
      if (toDoList === null) {
        tasks = [];
      } else {
        tasks = toDoList;
      }
      tasks.push(paragraph.innerText);
      localStorage.setItem("list", JSON.stringify(tasks));
    });
  });

  //storage
  let toDoList = JSON.parse(localStorage.getItem("list"));
  if (toDoList === null) {
    tasks = [];
  } else {
    tasks = toDoList;
  }
  tasks.push(paragraph.innerText);
  localStorage.setItem("list", JSON.stringify(tasks));

  if (toDoList != null) {
    console.log(toDoList);
  }
});
