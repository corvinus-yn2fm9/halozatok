var kérdések;
var kérdés;
var kérdésszám;

window.onload = () => {
    letöltés();
    kérdésBetöltés(1);
}

id = 1;

function letöltés() {
    fetch('/questions/all')
        .then(response => response.json())
        .then(data => { kérdésszám = data.length });
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => feltöltés(data));
}  

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésBetöltés(1);
}

function feltöltés(kérdés) {
    Kérdés = kérdés;
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}


következő = function () {
    visszaszínezés()
    id++;
    if (id == kérdésszám) {
        id = 0;
    }

    kérdésBetöltés(id);
}

előző = function () {
    visszaszínezés()
    id--;
    if (id == 0) {
        id = kérdésszám;
    }

    kérdésBetöltés(id);

}

 function színezés(valaszID) {
     if (valaszID == kérdés.correctAnswer) { document.getElementById(valaszID).style.backgroundColor = "green" }
     else { document.getElementById(valaszID).style.backgroundColor = "red" }
}

function visszaszínezés() {
    document.getElementById("válasz1").style.backgroundColor = "white";
    document.getElementById("válasz2").style.backgroundColor = "white";
    document.getElementById("válasz3").style.backgroundColor = "white";

}




