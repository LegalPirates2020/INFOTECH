const pega = document.querySelectorAll(".pega")
const flutter = document.querySelectorAll(".flutter")
const dart = document.querySelectorAll(".dart")
const pegama = document.querySelector(".pegama")
const flutterma = document.querySelector(".flutterma")
const dartma = document.querySelector(".dartma")


const mobile = (argv, arg) =>{
    argv.addEventListener("mouseover", () => {
        arg.forEach(e =>{
            e.classList.add("hovering-image")
            e.classList.add("hovering-text")
        })
    })
    argv.addEventListener("mouseout", () => {
        arg.forEach(e =>{
            e.classList.remove("hovering-image")
            e.classList.remove("hovering-text")
        })
    })
}

mobile(pegama,pega)
mobile(flutterma,flutter)
mobile(dartma,dart)


const mainside = document.querySelector(".mainside")
const firstside = document.querySelector(".firstside")
const secondside = document.querySelector(".secondside")
const side=document.querySelector('.side')
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")


img3.addEventListener('mouseenter',()=>{
    side.classList.add('frontside')
})

img3.addEventListener('mouseleave',()=>{
    side.classList.remove('frontside')
})

img4.addEventListener('mouseenter',()=>{
    side.classList.remove('backside')
})

img4.addEventListener('mouseleave',()=>{
    side.classList.remove('backside')
})