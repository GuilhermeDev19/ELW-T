function calcularIMC() {
    // Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Processamento
    let imc = peso / (altura * altura);

    // Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
}