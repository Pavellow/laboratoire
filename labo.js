var body = document.querySelector("body");

function addDiv(nom) {
    let div = document.createElement("div");
    div.id = nom;
    body.append(div);
}

function addP(id, idDiv, iter) {
    let queryID = document.getElementById(idDiv)
    for(let i = 0; i < iter; i++) {
        var p3 = document.createElement("p");
        p3.id = id + i;
        queryID.append(p3);
        p3.textContent = "Colonne " + i;
    }
}