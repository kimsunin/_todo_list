
const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]
const dd = document.querySelector("body")
dd.style.backgroundImage=`url('img/${chosenImage}')`
dd.style.backgroundSize="100% 374%"
// dd.style.backgroundColor="#D9E5FF"

// const bgImage = document.createElement("")
// bgImage.id = "image"
// bgImage.src = `img/${chosenImage}`

// document.body.appendChild(bgImage)
