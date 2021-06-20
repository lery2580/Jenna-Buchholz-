const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")

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

// when we scroll the page, see how far down the page we've scrolled
// then for each section, check whether we've passed if
// then updated the text in the header

document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset

    sections.forEach(section => {
        if (section.offsetTop -100 <= pixels) {
            clientTag.innerHTML = section.getAttribute("data-client")
            pageTag.innerHTML = section.getAttribute("data-page")

            if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white")
                progressTag.classList.add("white")
            } else {
                headerTag.classList.remove("white")
                progressTag.classList.remove("white")
            }
        }
    })

})