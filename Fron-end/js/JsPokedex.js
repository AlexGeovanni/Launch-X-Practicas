const conteHabilidads = document.getElementById("habilidades");
const conteNombre = document.getElementById("conte-todo");
const conteEstado = document.getElementById("estado");
const contetipo = document.getElementById("tipo");
const nombres = document.getElementById("nombre");
const AlturaPoke = document.getElementById("altura");
const PesoPoke = document.getElementById("peso");
const conteMoviImg = document.getElementById("moviImg")


const fetchPokemon = async () =>{
    const PokeNameInput = document.getElementById("pokename")
    let pokeName = PokeNameInput.value;
    pokeName = pokeName.toLowerCase();    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    // esta funcion para consultar api y then es una promesa que tendra un respuesta
    let data = await fetch(url).then((res)=>{
        if(res.status != "200"){
            alert("no se encontro el pokemon")
        }
        else{
            return res.json();
        }
    })
    if(data){
        let id = data.id;
        let nombre = data.species['name'];
        let habilids = data.abilities;
        let imgen = data.sprites.other;
        let estatu = data.stats;
        let tipo = data.types;
        let altura = data.height
        let peso = data.weight;
        let movimiento = data.sprites
        imgenPoke(imgen)
        nombrePoke(nombre,id);
        nombresHabilids(habilids,tipo);
        BaseEstatus(estatu)
        AlturaPeso(altura,peso)
        ImgMovimientos(movimiento)
    }
}


//Agregamos imagenes del pokemon
const imgenPoke = imgen=>{
    let imgepoke = document.getElementById("Imgpoke");
    imgepoke.src = imgen["official-artwork"].front_default;
}


//Asignamos el nombre del pokemon
const nombrePoke = (nombre,id)=>{
    nombres.innerHTML = `#${id} ${nombre[0].toUpperCase() + nombre.slice(1)}`;
}

// lista de las habilidades del pokemon
const nombresHabilids = (habilids, tipo) =>{
    let habilidad = habilids.map((item) => item.ability.name);
    let tipopoke = tipo.map((item) => item.type.name);
    let arrarColores =['electric','water','poison','grass','rock','ghost','fire','ground']
    contetipo.innerHTML =" "
    for(i in tipopoke){
        let elmentP = document.createElement("p")
        elmentP.innerHTML = tipopoke[i][0].toUpperCase() + tipopoke[i].slice(1);
        contetipo.appendChild(elmentP)
        for(color of arrarColores){
            if(tipopoke[i]==color){
                elmentP.style.background =`var(--${tipopoke[i]})`;
                break;
            }
        }
    }
    conteHabilidads.innerHTML = " ";
    for(i in habilidad){
        let elmentP = document.createElement("p")
        elmentP.innerHTML = habilidad[i][0].toUpperCase() + habilidad[i].slice(1);
        conteHabilidads.appendChild(elmentP)
    }
}
//
const BaseEstatus = (estatu)=>{
    let estatus = estatu.map((item) => item.base_stat);
    for(i in estatus){
        conteEstado.children[i].children[0].style.backgroundColor="#ffec2b";
        conteEstado.children[i].children[0].style.height=`${estatus[i]}%`;
        conteEstado.children[i].children[0].innerHTML= `${estatus[i]}`
    }
}
const AlturaPeso = (altura,peso)=>{
    let Peso = peso;
    let Altura = altura;

    AlturaPoke.innerHTML = `0.${Altura} M`;
    PesoPoke.innerHTML = `${peso} KG`
}

const ImgMovimientos = (movimiento)=>{
    let imgMovi = [];
    let img1 = movimiento.back_default;
    let img2 = movimiento.front_default;
    let img3 = movimiento.other.dream_world.front_default;
    imgMovi.push(img1,img2,img3)

    for( i in imgMovi){
        conteMoviImg.children[i].children[0].src = imgMovi[i]
    }
    
} 







// Media queries
const VerMas = document.getElementById("vermas")
const VerInfo = document.getElementById("info")
const VerContendorPrincipal = document.getElementById("contendor")
const VolverInicio = document.getElementById("volverInicio")

VerMas.addEventListener('click',()=>{
    VerContendorPrincipal.classList.add("oculta")
    VerInfo.classList.remove("oculta")
    VerInfo.classList.add('ver')
})

VolverInicio.addEventListener('click',()=>{
    VerInfo.classList.add("oculta")
    VerContendorPrincipal.classList.remove("oculta")
    VerInfo.classList.remove("ver");
})