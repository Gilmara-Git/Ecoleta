// Vamos usar a API do IBGE utilizando a funcao fetch
// fetch retorna uma promise
// json retorna uma promise
// demonstracao do Mayk que trouxe os estados da API do IBGE - goglge: servicos API IBGE
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
    //console.log('index', event.target.selectedIndex)
    stateInput.value = event.target.options[indexOfSelectedState].text
    //console.log('Populating hidden field "state with >', stateInput.value)

    const ufValue =  event.target.value
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
   
    // limpando o camp cidades antes de buscar as cidades, pois ao selecionar outro estado ainda carregava cidades do estado anterior
    citySelect.innerHTML = `<option value>Selecione a Cidade</option>`
    citySelect.disable = true;


    fetch(url)
    .then(res => res.json())
    .then(function(cities){
        for(const city of cities){
        //    console.log(ufValue)
        //    console.log(city) 
           citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities ) // passando funcao por referencia


    const itemsToCollect = document.querySelectorAll('.items-grid li')
    
    for(const item of itemsToCollect){

        item.addEventListener("click", handleSelectedItem)
    }

    let selectedItems = []
    // adicionando e tirando a classe selected do <li>
    function handleSelectedItem(event){

        const itemLi = event.target
        const itemId = itemLi.dataset.id
            
        itemLi.classList.toggle("selected")

        const collectionItems = document.querySelector("[name=items]")

        const alreadySelected = selectedItems.findIndex(item =>{
            const foundItem = item == itemId
            return foundItem
        })

       
        if(alreadySelected >= 0 ){

            const filteredItems = selectedItems.filter(item =>{
                const itemIsDifferent = item != itemId
                return itemIsDifferent
            })

            selectedItems = filteredItems
           
        }else {

            selectedItems.push(itemId)
        }
        collectionItems.value = selectedItems
    }