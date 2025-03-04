const currentPass = document.getElementById("currentPass");
const checkPass = document.getElementById("checkPass");
const checking = document.getElementById("checking")
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    checking.innerHTML = "";
    if(currentPass.value !== checkPass.value){
        const div = document.createElement("div");
        div.classList.add('text-red-600');
        div.innerHTML = `
        <p>your pass not match.</p>
        `;
        checking.appendChild(div);
    }else{
        const div = document.createElement("div");
        div.classList.add('text-green-600');
        div.innerHTML = `
        <p>Grad you make strong Pass.</p>
        `;
        checking.appendChild(div);
    }
})
