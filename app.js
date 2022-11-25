const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            target.value = (som.value / response.usd).toFixed(2)
            target.value = (usd.value / response.som).toFixed(2)
            target.value = (som.value / response.eur).toFixed(2)
            target.value = (eur.value / response.som).toFixed(2)
        })
    })
}

convert(som, usd)
convert(usd, som)
convert(som, eur)
convert(eur, som)