/**
 * Capturar Etiquetas Para Poder Manipular
 */
const errores=document.getElementsByClassName("err")
const email=document.getElementById("email")
const password=document.getElementById("password")
const btn = document.getElementById("login")

/**
 * Ocultar Los Errores
 */

for (let i = 0; i < errores.length; i++) {
    errores[i].style.display = "none"
    
}

/**
 * Validar que el Email es Valido
 */

const validarEmail = (email)=>{

    let expreg = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/
    return expreg.test(email)?true:false

}
/**
 * Validar que el Formato del Password es el correcto
 */
const validarPassword=(password)=>{
    /**por lo menos 8 caracteres que contengan mayuscula, minuscula, numeros y caracter especial */
    let expreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return expreg.test(password)?true:false
}

/**
 * Si no Cumple con los requisitos los input Mostrara el mensaje de Error
 */

const validar=()=>{
    const val1=validarEmail(email.value)?"none":"block"
    const val2=validarPassword(password.value)?"none":"block"
    errores[0].style.display=val1
    errores[1].style.display=val2
}

email.addEventListener("click", (e)=>{
    e.preventDefault()
    errores[0].style.display="none"   
})

password.addEventListener("click", (e)=>{
    e.preventDefault()
    errores[1].style.display="none"   
})

btn.addEventListener("click",(e)=>{

    e.preventDefault()
    validar()
})

