window.onload = () => {
    console.log("betöltődött")

    var faktoriális = function (n) {
        let er = 1;
        for (let i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    let hova = document.getElementById("ide");
    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor")

        hova.appendChild(sor)

        for (var o = 0; o <= s; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám)
            szám.innerText = faktoriális(s) / (faktoriális(o) * faktoriális(s - o));
            szám.style.color = `rgb(${255 / 10 * s},0,${255 / 10 * o})`
            szám.classList.add("elem")
        }

    }
}