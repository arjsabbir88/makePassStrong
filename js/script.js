const currentPass = document.getElementById("currentPass");
const checkPass = document.getElementById("checkPass");
const checking = document.getElementById("checking")
const btn = document.getElementById("btn");
const div = document.createElement("div");
const numberLength = document.getElementById("number");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const special = document.getElementById("special");

btn.addEventListener("click", ()=>{
    checking.innerHTML = "";
    numberLength.classList.remove("text-red-600");
    lowerCase.classList.remove("text-red-600");
    upperCase.classList.remove("text-red-600");
    special.classList.remove("text-red-600");


    if(currentPass.value !== checkPass.value){
        div.classList.add('text-red-600');
        div.innerHTML = `
        <p>your pass not match.</p>
        `;
        checking.appendChild(div);
    }else{
        const passLength = currentPass.value.length;
        const hasUpperCase = /[A-Z]/.test(currentPass.value)
        const hasLowerCase = /[a-z]/.test(currentPass.value)
        const hasSpecial = /[!@#$%^&*]/.test(currentPass.value)

        if(passLength >= 8 && hasLowerCase && hasUpperCase && hasSpecial){
            div.classList.add('text-green-600');
            div.innerHTML = `
            <p>Grad you make strong Pass.</p>
            `;

            numberLength.classList.add("text-green-600");
            lowerCase.classList.add("text-green-600");
            upperCase.classList.add("text-green-600");
            special.classList.add("text-green-600");

            checking.appendChild(div);
            

        }else{
            if(passLength < 8 ){
                
                numberLength.classList.add('text-red-600');
            }

            if(!hasLowerCase){
                lowerCase.classList.add('text-red-600');
            }
            if(!hasUpperCase){
                upperCase.classList.add('text-red-600');
            }
            if(!hasSpecial){
                special.classList.add('text-red-600');
            }
        }
    }
})
