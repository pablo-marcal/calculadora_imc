function calcular(){
    let peso = +document.getElementById("peso").value 
    let altura = +document.getElementById("ps").value
    let soma = peso / altura**2
    document.getElementById("resultado").innerHTML = `${soma}`
}