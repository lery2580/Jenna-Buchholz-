const pixelsTag = document.querySelector("div.pixels")

// when we scroll the page, update the pixels tag to be how far we scrolled

document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels.toFixed(0)

})

document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset
})