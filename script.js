//câmbio
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//variáveis
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//EVENTS

//permite somente números no input e substitui outros caracteres por vazios
amount.addEventListener("input", () => {
  const hasCaracteresRegex = /\D+/g
  amount.value = amount.value.replace(hasCaracteresRegex, "")
})

//captura o evento submit no form
form.onsubmit = (event) => {
  event.preventDefault()
  
  //define parâmetros para função de conversão
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }

}

//função de conversão
function convertCurrency(amount, price, symbol) {
  
  //try-catch para pegar erros
  try {
    //altera conteúdo da descrição
    description.textContent = `${symbol}` + " 1 = " + `${formatCurrencyBRL(price)}`

    //converter real para moeda escolhida
    let convertedValue = amount * price
    
    //verifica se resultado é um número
    if (isNaN(convertedValue)){
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    //altera conteúdo do resultado
    result.textContent = `${formatCurrencyBRL(convertedValue)}`
    
    //adiciona classe à tag footer
    footer.classList.add("show-result")

  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

//converte string em real brasileiro por meio do método toLocalString()
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}




  