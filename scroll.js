const pixelsTag = document.querySelector("div.pixels")

const bodyTag = document.querySelector("body")

const progressTag = document.querySelector("div.progress")

// when we scroll the page, update the pixels tag to be how far we scrolled

document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels.toFixed(0)

})

document.addEventListener("scroll", function(){

    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance

    progressTag.style.width = `${100 *percentage}%`

})