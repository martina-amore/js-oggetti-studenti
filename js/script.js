// 1) Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 3) Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1° ESERCIZIO
var studente = {
    "nome": "Martina",
    "cognome": "Amore",
    "eta": 31,
};

document.getElementById("first").innerHTML += "Nome, cognome ed età dello studente:";
for (var key in studente) {
    document.getElementById("first").innerHTML += "<br>" + key + ": " + studente[key];
}

// 2° ESERCIZIO
var studenti =
[
    {
        "nome": "Mario",
        "cognome": "Rossi",
        "eta": 32,
    },
    {
        "nome": "Laura",
        "cognome": "Gatti",
        "eta": 25,
    },
    {
        "nome": "Gabriella",
        "cognome": "Giannone",
        "eta": 19,
    },
];

for (var i = 0; i < studenti.length; i++) {
    document.getElementById("second").innerHTML += "Studente n. " + (i + 1);
    document.getElementById("second").innerHTML += "<br>Nome: " + studenti[i].nome;
    document.getElementById("second").innerHTML += "<br>Cognome: " + studenti[i].cognome + "<br><br>";
}

// 3° ESERCIZIO
var nuovoStudente = {};

nuovoStudente.nome = prompt("Inserisci il nome dello studente:");
nuovoStudente.cognome = prompt("Inserisci il cognome dello studente:");
nuovoStudente.eta = parseInt(prompt("Inserisci l'età dello studente:"));

studenti.push(nuovoStudente);
document.getElementById("third").innerHTML += "Dati del nuovo studente:";
document.getElementById("third").innerHTML += "<br>Nome: " + nuovoStudente.nome;
document.getElementById("third").innerHTML += "<br>Cognome: " + nuovoStudente.cognome;
document.getElementById("third").innerHTML += "<br>Età: " + nuovoStudente.eta + "<br><br>";

console.log(studenti);
