var xhttp = new XMLHttpRequest();
const data__windows = document.getElementById('data__windows');
const data__red = document.getElementById('data__red');
const data__mac = document.getElementById('data__mac');
const data__diseñoWeb = document.getElementById('data__diseñoWeb');
xhttp.open("GET", "./precios-servicios.json", true);


xhttp.addEventListener('load', (data) => {
    var resultado = (data.target.response);
    resultado = JSON.parse(resultado);

    // Windows
    for (let i = 1; i < resultado.windows.length; i++) {
        data__windows.innerHTML += `
            <tr">
                <td>${[i]}- ${resultado.windows[i].type}</td>
                <td>${resultado.windows[i].price}</td>
            </tr>
        `;
    }

    // red
    for (let i = 1; i < resultado.red.length; i++) {
        data__red.innerHTML += `
            <tr">
                <td>${[i]}- ${resultado.red[i].type}</td>
                <td>${resultado.red[i].price}</td>
            </tr>
        `;
    }

    //mac
    for (let i = 1; i < resultado.mac.length; i++) {
        data__mac.innerHTML += `
            <tr">
                <td>${[i]}- ${resultado.mac[i].type}</td>
                <td>${resultado.mac[i].price}</td>
            </tr>
        `;
    }

    // diseñoWeb
    for (let i = 1; i < resultado.diseñoWeb.length; i++) {
        data__diseñoWeb.innerHTML += `
            <tr">
                <td>${[i]}- ${resultado.diseñoWeb[i].type}</td>
                <td>${resultado.diseñoWeb[i].price}</td>
            </tr>
        `;
    }
});

xhttp.send();

