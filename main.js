
function changeslides(n) {
    slides(n)
}

function slides (n) {
    for(let i = 1 ; i <= 5; i++){
        let slideImg = document.querySelector('.img' + i)
        slideImg.style.display= 'none'  
    }
    let slideImg = document.querySelector('.img' + n)
    slideImg.style.display = 'block'
    slideImg.style.cursor='pointer' 
    
}
changeslides(1)

