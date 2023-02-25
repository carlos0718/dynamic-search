let card = document.querySelector("#card-list");
let input = document.querySelector("#input-search");

function fetchingData(){

  fetch("../mock.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((x) => {
        card.innerHTML += `<div>
                            <img src="${x.urlImagen}" alt="${x.nombre}" />
                            <h3>${x.nombre}</h3>
                            <span>$ ${x.precio}</span>
                          </div>`;
      });
    });
}
fetchingData();

input.addEventListener("input",(i)=>{

  const {value} = i.target
  card.innerHTML = '';

  fetch("../mock.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      if(x.nombre.toLowerCase().includes(value.toLowerCase())) {
        card.innerHTML += `<div>
                            <img src="${x.urlImagen}" alt="${x.nombre}" />
                            <h3>${x.nombre}</h3>
                            <span>$ ${x.precio}</span>
                          </div>`;
      }

    });
  }); 

})


