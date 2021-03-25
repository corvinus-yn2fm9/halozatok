var kérdések;
var k =0;

window.onload = () =>
{
    letöltés()
    
}



function letöltés()
{
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(k);
}

function kérdésMegjelenítés(k)
{
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[k].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[k].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[k].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[k].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image;
    document.getElementById("válasz1").style.backgroundColor = "white";
    document.getElementById("válasz2").style.backgroundColor = "white";
    document.getElementById("válasz3").style.backgroundColor = "white";

}


következő = function() 
{
    k++;
    if (k == kérdések.length)
    {
        k = 0;
    }
   
    kérdésMegjelenítés(k);
}

előző = function ()
{
    k--;
     if (k == 0)
     {
        k = kérdések.length;
    }
    
    kérdésMegjelenítés(k);

}

színezés = function(n)
{
    if (n == kérdések[k].correctAnswer)
    { document.getElementById("válasz"+n).style.backgroundColor = "green" }
    else
    { document.getElementById("válasz"+n).style.backgroundColor = "red" }
}



