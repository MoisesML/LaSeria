let btnDescubrir = document.getElementById("btnIDescubrir");
let btnCotizacion = document.getElementById("btnICotizacion");
let ctnServicio1 = document.getElementById("servicio1");
let spnServicio1 = document.getElementById("SSpan1");
let ctnDescription1 = document.getElementById("description1");
let ctnMenu = document.getElementById("menu");
let allMain = document.querySelector("main");
//Navegadores
let navegadores = document.getElementsByClassName("navegator");
let aInicio = document.getElementById("navInicio");
let aNosotros = document.getElementById("navNosotros");
let aCatalog = document.getElementById("navCatalog");
let aExperiencia = document.getElementById("navExperience");
let aInformación = document.getElementById("navInfo");
let aContacto = document.getElementById("navContact");

//Navegar por la ventana inicial
aInicio.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

aNosotros.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 750.4,
        behavior: "smooth",
    })
});

aCatalog.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 750.4*2,
        behavior: "smooth",
    })
});

aExperiencia.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 750.4*3,
        behavior: "smooth",
    })
});

aInformación.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 750.4*4,
        behavior: "smooth",
    })
});

aContacto.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 750.4*5,
        behavior: "smooth",
    })
});



//-------------------------------------------------------

btnDescubrir.addEventListener("click",function(){
    alert("Aun en desarrollo")
})

btnCotizacion.addEventListener("click", function(){
    alert("Falta mas tiempo :´v")
});

btnCotizacion.addEventListener("mouseover",function(){
    btnDescubrir.style.visibility = "hidden"
});

btnCotizacion.addEventListener("mouseout",function(){
    btnDescubrir.style.visibility = "visible"
});

// Una opcion para los contenidos dinamicos .... FALTA EVALUAR
// ctnServicio1.addEventListener("mouseover",function(){
//     spnServicio1.style.width = "0px"
//     spnServicio1.style.height = "0px"
//     ctnDescription1.style.width = "80%"
//     ctnDescription1.style.height = "80%"
// })

window.onscroll = function(){
    console.log(document.documentElement.scrollTop) 
}