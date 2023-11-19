let vaihto = document.querySelector("#target")
vaihto.addEventListener('mouseover', function (){
    vaihto.src = "img/picB.jpg"
})

vaihto.addEventListener("mouseout", function (){
    vaihto.src = "img/picA.jpg"
})