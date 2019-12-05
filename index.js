let numeroInput = '';
const url = `https://pokeapi.co/api/v2/pokemon/`;

function clickTextInput(){
    let pokeName = new Array(1000);
    let pName;
    let pokeHeight = new Array(1000);
    let pHeight;
    let pokeOrder = new Array(1000);
    let pOrder;

    //caso o valor venha do text settando variavel input
    if(document.getElementById('numeroInput').value){
        numeroInput = document.getElementById('numeroInput').value;
    }
    // caso o valor venha do select settando na variavel input
    if(document.getElementById('selectInput').value){
        numeroInput = document.getElementById('selectInput').value;
    }        

    if( numeroInput < 807 ) {
        
        //zerando qualquer resquicio de buscas anteriores
        document.getElementById('demo').innerHTML = '';
        //removendo estilização de display:none
        document.getElementById('demo').classList.remove("none");

        //fazendo loop nos elementos da busca da API
        for(let count = 1; count <= numeroInput; ++count) {
            let objeto = url + count;
            fetch(objeto)
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {

                //array dos atributos
                pokeName[count] = data.name; 
                pokeHeight[count] = data.height;
                pokeOrder[count] = data.id;

                // valor no giro atual do loop
                pName = pokeName[count]; 
                pHeight = pokeHeight[count];
                pOrder = pokeOrder[count];

                //interação com interface visual
                document.getElementById('demo').innerHTML += '<div class="li item"> Nome: ' + pName + '<br> Numero: '+ pOrder +'<br> Peso: ' + data.weight + '<br> Altura: ' + pHeight + '<br><img class="img" src="' + data.sprites.back_default + '" /><br>habilidades:<br>' + data.abilities[0].ability.name + '<br>' + data.abilities[1].ability.name + '</div>';
        
                if( count == numeroInput) {
                    //fim da contagem de itens zerando valor inputs para proxima busca
                    document.getElementById('numeroInput').value = "";
                    document.getElementById('selectInput').value = "";
                }  
            }) 
        }
    } else {
        alert('Foi buscado um elemento maior do que a lista ou foi digitado letras, por favor realizar nova busca');
        document.getElementById('numeroInput').value = "";
    }
}

function compare(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
}          
