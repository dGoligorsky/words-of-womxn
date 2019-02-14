let number = 0
const stamps = [
    "assets/circles.svg",
    "assets/heart.svg",
    "assets/moon.svg",
    "assets/rainbow.svg",
    "assets/shooting-star.svg",
    "assets/waves.svg"
]
const stampsTag = document.querySelector("div.stamps")

const addStamp = function(x, y) {
    // console.log(x, y)

    const img = document.createElement("img")

    img.setAttribute("src", stamps[number])

    // remove half the window width to center the stamps
    // this helps keep stamps in the right place on a window resize
    img.style.left = (x - window.innerWidth / 2) + "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    // add some audio

    const audio = document.createElement("audio")
    audio.setAttribute("src", "assets/plop.mp3")
    audio.play()

    number += 1

    if (number >= stamps.length) {
        number = 0
    }
}

document.addEventListener("click", function(event) {
    // console.log(event)

    addStamp(event.pageX, event.pageY)
})