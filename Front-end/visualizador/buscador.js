let buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", e=>{

    if (e.key === "Escape"){
        e.target.value == "";
    }



    document.querySelectorAll(".preguntadiv").forEach(busc => {
        if (busc.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
          busc.classList.remove("filtro");
        } else {
          busc.classList.add("filtro");
        }
      });

})
