//Arrays  de objetos (datos)
 const Cards = [
     {
         title: "Producto 1",
         imageUrl: "assets/img/chaqueta-purpura.jpg", 
         Content: "Chaqueta Purpura",
         button:"Comprar",
     },
     {
         title: "Producto 2",
         imageUrl: "assets/img/buso-blanco.avif", 
         Content: "Buso Blanco",
         button:"Comprar",
     },
     {
         title: "Producto 3",
         imageUrl: "assets/img/buso-azul.jpg", 
         Content: "Buso Azul",
         button:"Comprar",
     },
     {
         title: "Producto 4",
         imageUrl: "assets/img/buso-negro.avif", 
         Content: "Buso Negro",
         button:"Comprar",
     }
 ];
//datos guardados en localstorage
// localStorage.setItem("Cards",JSON.stringify(Cards))
Cards = JSON.parse(localStorage.getItem("Cards"));
