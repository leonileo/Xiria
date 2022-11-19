let add = document.querySelector('.bar');
let links = document.querySelector('.active')

add.addEventListener("click", function(){
        add.classList.toggle("is-active");
        links.classList.toggle("is-active");
})
