// Vamos usar a API do IBGE utilizando a funcao fetch
// fetch retorna uma promise
// json retorna uma promise
// demonstracao do Mayk que trouxe os estados da API do IBGE
// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){ return res.json() }).then(function(data){ console.log(data)})


function populateUFs(){

const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>  res.json()) // arrow function
    .then(function(states){ 
            for(const state of states){

                ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`
                               
            }
    })
}

populateUFs()



function getCities(event){

    const citySelect = document.querySelector("select[name=city")
    const stateInput = document.querySelector("[name=state") // assim tb funciona
    // com este campo escondido acima vamos atualiza-lo com o UF que foi selecionado da seguinte forma abaixo:
    const indexOfSelectedState = event.target.selectedIndex;  
    console.log('index', event.target.selectedIndex)
    stateInput.value = event.target.options[indexOfSelectedState].text
    console.log('Populating hidden field "state with >', stateInput.value)

    const ufValue =  event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
   
    fetch(url)
    .then(res => res.json())
    .then(function(cities){
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities ) // passando funcao por referecia


