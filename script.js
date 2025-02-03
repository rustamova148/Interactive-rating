let digitboxes = document.querySelectorAll('.digitbox');
let submitbtn = document.querySelector('.submitbtn');
console.log(submitbtn);
let nscore;

digitboxes.forEach((digitbox) => {
    digitbox.addEventListener("click", function() {
        digitbox.style.backgroundColor = "#fb7413";
        digitbox.style.color = "#2d3843";
        console.log("clicked");
        nscore = digitbox.innerHTML;
        console.log(nscore);
    })
})

submitbtn.addEventListener("click", function() {
    if(nscore !== undefined){
        localStorage.setItem("score", nscore);
        window.location.href = "./thanks.html";
    }
})
