function myProject() {
    //variables
    const bodyElement = document.body;
    const header = document.createElement("header");
    const myH1 = document.createElement("h1");
    const myContenedor = document.getElementById("contenedor");
    const btn = document.getElementsByTagName("button")

    //Encabezado de la pagina web 
    header.style.backdropFilter = "blur(24px)";
    header.style.height = "fit-content"
    header.style.fontSize = "30px"
    bodyElement.appendChild(header);
    myH1.style.color = "red";
    myH1.textContent = "!Welcome to the NiceSkin¡";
    header.appendChild(myH1);

    // forOf para recorrer el array y agregarlos al htmll 
    for (const x of Cards) {
        const myArticle = `
    <article>
    <img src="${x.imageUrl}"/>
    <h2>${x.title}</h2>
    <p>${x.Content}</p>
    <button>${x.button}</button>
    </article>
    `;

        myContenedor.innerHTML += myArticle;
    }

    //Le agregamos un evento la etiqueta button
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", ()=>{
            alert(btn[i].textContent + " Este Producto: " + myContenedor.innerHTML.title)
            console.log(btn[i].textContent + " Este Producto: " + myContenedor.innerHTML.title)
        })
    }
}
myProject();


