// const btn=document.getElementById("btn");
// btn.addEventListener('click',()=>{
//     document.body.classList.toggle("dark");
// });

const toggle = document.querySelector(".theme-switch__checkbox");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
});