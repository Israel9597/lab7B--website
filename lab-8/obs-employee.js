/**
 * app.js
 */

window.onload = function () {
  const p = document.createElement("p");
  p.innerHTML = "Enter the number of Employees below:";
  p.style.fontWeight = "bold";
  p.style.fontSize = "150%";
  p.id = "inputMsg";
  document.getElementById("box").appendChild(p);

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.id = "input";
  document.getElementById("box").appendChild(input);

  const button = document.createElement("button");
  button.innerText = "Get Employee List";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.id = "btn";

  document.getElementById("box").appendChild(button);

  const heading = document.createElement("h1");
  heading.innerText = "Employees List";
  document.getElementById("box").appendChild(heading);

  let div = document.createElement("div");
  div.innerHTML = "";
  div.id = "emp1";
  document.getElementById("box").appendChild(div);

  button.onclick = function displayEmployees() {
    const input = document.getElementById("input");
    if (input.value <= 0) throw new Error("please enter number");

    const postObservable = rxjs.from(
      fetch(`https://randomuser.me/api/?results=${input.value}`).then(
        (resolve) => resolve.json()
      )
    );

    postObservable.subscribe((post) => {
      document.getElementById("emp1").innerHTML = "";

      for (let i = 0; i < post.results.length; i++) {
        div.style.borderTop = "1px solid grey";
        div.style.borderBottom = "1px solid grey";

        let fullName = document.createElement("div");
        div.appendChild(fullName);
        let firstName1 = post.results[i].name.first;
        let lastName1 = post.results[i].name.last;
        fullName.innerHTML = firstName1 + " " + lastName1;

        let location = document.createElement("div");
        div.appendChild(location);
        let p1 = document.createElement("p");
        p1.innerText = "Location";
        p1.style.fontWeight = "bold";
        location.appendChild(p1);

        let p2 = document.createElement("p");
        p2.innerHTML =
          post.results[i].location.street.number +
          " " +
          post.results[i].location.street.name;
        location.appendChild(p2);

        let p3 = document.createElement("p");
        let empAddress =
          post.results[i].location.city +
          " " +
          post.results[i].location.state +
          " " +
          post.results[i].location.country +
          " " +
          post.results[i].location.postcode;
        p3.innerHTML = empAddress;
        location.appendChild(p3);
      }
    });
  };
};
