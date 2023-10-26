window.addEventListener("load", function () {
  let person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("user").innerHTML = person.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
  } else {
    document.getElementById("user").innerHTML = "User";
  }
});

document.getElementById("submit").addEventListener("click", function () {
  handleForm();
});

function handleForm() {
  const name = document.forms["form"]["nama"].value;
  const date = document.forms["form"]["date"].value;
  const gender = document.forms["form"]["jk"].value;
  const message = document.forms["form"]["pesan"].value;

  let currentDate = new Date();

  const a = document.getElementById("current");
  a.innerHTML = currentDate;

  const b = document.getElementById("tbody");

  const h = ["Nama", "Tanggal Lahir", "Jenis Kelamin", "Pesan"];
  const p = [name, date, gender, message];

  for (let i = 0; i < h.length; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const t = document.createElement("td");

    if (p[i]) {
      // b.appendChild(tr);
      tr.appendChild(t);
      t.innerHTML = h[i];

      tr.appendChild(td);
      td.innerHTML = p[i];
      console.log(h[i]);

      b.appendChild(tr);
    } else {
      alert("isikan data terlebih dahulu!!");
      break;
    }

    if (h[i] === "Nama") {
      document.getElementById("nama").value = "";
    } else if (h[i] === "Tanggal Lahir") {
      document.getElementById("date").value = "";
    } else if (h[i] === "Jenis Kelamin") {
      // document.forms["form"]["jk"].checked = false;
      const check = document.forms["form"]["jk"];
      for (let i = 0; i < check.length; i++) {
        // const element = array[i];
        check[i].checked = false;
        // console.log(check[i]);
      }
      // console.log(document.forms["form"]["jk"]);
    } else if (h[i] === "Pesan") {
      document.getElementById("pesan").value = "";
    }
  }

  console.log(currentDate);
  console.log(name);
  console.log(date);
  console.log(gender);
  console.log(message);
}
