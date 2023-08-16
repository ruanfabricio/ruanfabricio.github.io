function togglemode(){
  const html = document.documentElement
html.classList.toggle("light")

// pegar a tag img
const img = document.querySelector("#profile img")

// muda descrição de foto
const alt = document.querySelector("#profile img")

//subirtituir imagem
  if (html.classList.contains("light")) {

  // ser tiver com light
img.setAttribute("src","./assets/avatar-light@2x.png")

// ser tiver com light
alt.setAttribute("alt", "foto Ruan de blusa preta e boné")

 }else{
 // ser tiver sem light 
 img.setAttribute("src","./assets/Avatar (2).png")
 alt.setAttribute("alt"," foto de Ruan camisa polo azul bebe")
  }
}
