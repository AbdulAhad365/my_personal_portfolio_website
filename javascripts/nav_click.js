    const btn = document.getElementById("btn");
    const menu = document.getElementById("menu");

btn.addEventListener("click", (e) => {
e.preventDefault();
    menu.classList.toggle("show")
    }); 
