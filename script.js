function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")

  const Image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    Image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    Image.setAttribute("src", "./assets/avatar.png")
  }
}
