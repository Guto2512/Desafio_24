function verificar() {
    let temp = parseFloat(document.getElementById("temp").value);
    let F = (temp * 1.8) + 32;
    let K = temp + 273.15;

    document.getElementById("fahrenheit").innerHTML = F.toFixed(2);
    document.getElementById("kelvin").innerHTML = K.toFixed(2);
}