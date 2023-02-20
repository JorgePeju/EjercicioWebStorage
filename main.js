//Un listado de productos:

// 1.2. Cada producto tendrá un botón de añadir dicho producto en el localStorage. 1.3. Un botón de eliminar el producto de la lista existente(Se eliminará del localStorage)

// Todo producto que se añada o se elimine del localStorage se verá reflejado automaticamente en otra lista en el propio navegador.

// Tendremos un botón para vaciar la lista completa del localStorage.


const lista=document.querySelector("#lista-compra");
const compra=document.querySelector("#cesta-compra")
const arrayCompra = [
    {
        id: "a1",
        nombre: "pan"
    },
     {
        id: "a2",
        nombre: "fruta"
    },
    {
        id: "a3",
        nombre: "queso"
    },
    {
        id: "a4",
        nombre: "pescao"
    }

];

const arrayProductos = JSON.parse(localStorage.getItem("arrayCompra")) || [] ;

console.log("arrayProductos",arrayProductos)



// EVENTOS

document.addEventListener("click",(ev)=>{

        if(ev.target.matches(".add")){
            const id=ev.target.parentElement.id
            const producto=arrayCompra.find((item)=>item.id==id);
            arrayProductos.push(producto);
            addLocal();
        }else if(ev.target.matches(".del")){
            const id=ev.target.parentElement.id
            const producto1=arrayCompra.find((item)=>item.id==id);
            arrayProductos.pop(producto1);
            addLocal();
        } else if(ev.target.matches(".vaciar")){
            arrayProductos.length = 0;
            localStorage.removeItem("productos");
        }

        pintarEnCesta();
        
})


// FUNCIONES

const pintarEnLista= ()=>{
    arrayCompra.forEach(({id,nombre})=>{
        lista.innerHTML+= `<li id=${id}>${nombre} <button class="add">Añadir</button> </li>`
    });
};

const pintarEnCesta= ()=>{
    compra.innerHTML="";

    arrayProductos.forEach(({id,nombre})=>{
        compra.innerHTML+= `<li id=${id}>${nombre} <button class="del">Borrar</button> </li>`
    });
    if (arrayProductos.length > 0) {
        compra.innerHTML += `<div><button class="vaciar">Vaciar Cesta</button></div>`;
    };
};

const addLocal= ()=>{
    localStorage.setItem("productos",JSON.stringify(arrayProductos))
};
 
document.addEventListener("DOMContentLoaded", () => {

    pintarEnLista();
  
});