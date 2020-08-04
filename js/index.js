getTasks();

function agregar(boton) {
  alert("Se agrego el helado " + boton.id);
  saveTask(boton);
}

function saveTask(e) {

  let mydata = {
    id: e.id,
  }

  if (localStorage.getItem('carrito') === null) {
    let mydatas = [];
    mydatas.push(mydata);
    localStorage.setItem('carrito', JSON.stringify(mydatas));
  } else {
    let mydatas = JSON.parse(localStorage.getItem('carrito'));
    mydatas.push(mydata);
    localStorage.setItem('carrito', JSON.stringify(mydatas));
  }
}


function getTasks() {
  let dataJson = JSON.parse(localStorage.getItem('carrito'));
  if (dataJson == null) {
    return;
  }
  let dataCarrito = document.getElementById('cont');
  dataCarrito.innerHTML = '';
  for (let i = 0; i < dataJson.length; i++) {
    let id = dataJson[i].id;
    let name = "";
    let img = "";

    if (id == 1) {
      name = "uno";
      img = "Img/index.jpeg";
    } else if (id == 2) {
      name = "dos";
      img = "Img/helado2.png";
    } else if (id == 3) {
      name = "tres";
      img = "Img/helado3.jpg";
    }

    if (id == 4) {
      name = "cuatro";
      img = "Img/index.jpeg";
    } else if (id == 5) {
      name = "cinco";
      img = "Img/helado2.png";
    } else if (id == 6) {
      name = "seis";
      img = "Img/helado3.jpg";
    }

    dataCarrito.innerHTML +=
      `<div class="col-4 data">
        <img src="${img}" alt="Helado">
        <div class="text-left pt-2">
          <h5>helado ${name}</h5>
        </div>
      </div>`;
  }
}

function allclear() {
  localStorage.clear();
}

