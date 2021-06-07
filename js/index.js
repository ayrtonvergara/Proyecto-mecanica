
  const servicios = [];
  const eliminar = function(){

    cargarTabla();
 Swal.fire({
    position: 'top-center',
    icon: 'error',
    title: 'Producto eliminado',
    showConfirmButton: false,
    timer: 1500
  })

    let nro = this.nro;
    servicios.splice(nro,1);
    cargarTabla();

  };

  const cargarTabla = ()=>{
    
    let tbody = document.querySelector("#tbody-servicio");
    tbody.innerHTML = "";
    
    for(let i=0; i < servicios.length; ++ i){
       let p = servicios[i];
       
       let tr = document.createElement("tr");
      
       
       let tdNombre = document.createElement("td");

       let tdcantidad = document.createElement("td");
       
       tdNombre.innerText = p.nombre;
       tdcantidad.innerText = i + 1;

        let boton = document.createElement("button");
        boton.nro = i;
        boton.addEventListener("click", eliminar);
        boton.innerText ="eliminar";
        boton.classList.add("btn","btn-danger");

        tdNombre.appendChild(boton);
        tr.appendChild(tdcantidad);
        tr.appendChild(tdNombre);
        tbody.appendChild(tr);
       
    }
};
 
 document.querySelector("#servicio-form").addEventListener('submit', (e)=>{
 e.preventDefault();
 let nombre = document.querySelector("#nombre-select").value;
 let servicio ={};
 
servicio.nombre = nombre;

servicios.push(servicio);
 
 cargarTabla();
 Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Producto Agregado',
    showConfirmButton: false,
    timer: 1500
  })
 });
