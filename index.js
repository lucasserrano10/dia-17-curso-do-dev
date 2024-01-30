class Hotel {
    Id
    Nome 
    Categoria
    Endereço
    Telefone
   constructor(id,nome,categoria,endereço,telefone){
    this.Id = id
    this.Nome = nome
    this.Categoria = categoria
    this.Endereço = endereço
    this.Telefone = telefone
}
 }
 
class Reserva {
    Id
    IdHotel
    NomeResponsavel
    Entrada
    Saida
constructor(id,idhotel,nomeresponsavel,entrada,saida){
    this.Id = id
    this.NomeResponsavel = nomeresponsavel
    this.IdHotel = idhotel
    this.Entrada = entrada
    this.Saida = saida
}
 
}

let hoteis = []
let reservas = [] 
let idhotel = 1
let idreserva = 1

function cadastrarHotel(){
    let nome = prompt("nome do hotel :")
    let categoria = prompt("categoria do hotel :")
    let endereço = prompt("endereço do hotel :")
    let telefone = prompt("telefone do hotel :")
    let hotel = new Hotel(idhotel,nome,categoria,endereço,telefone)
    idhotel++
    hoteis.push(hotel)
}

function cadastrarReserva(){
    let continuar = false
    let idhotel

    do{
        idhotel = parseInt(prompt("digite o id do hotel :"))
        for(i = 0; i < hoteis.length; i ++){
            if(idhotel == hoteis[i].id){
                i = hoteis.length
                continuar = true
            }else if (i == hoteis.length - 1){
                alert("ID do hotel não esta cadastrado ")
            }
        }
    }while(!continuar){
        let nome = prompt("nome do responsável :")
        let diaEntrada = parseInt(prompt("dia da entrada : "))
        let diasaida
       do{
       diasaida = parseInt(prompt("dia da saída : "))
       if(diasaida <diaEntrada){
        console.log("o dia da saída não pode ser menor que o da entrada")
       }
       }while(diasaida<diaEntrada)
        }
        let reserva = new Reserva(idreserva,idhotel,nome,diaEntrada,diasaida)
        idreserva++
        reservas.push(reserva)
}

function procurarReservaHotel (idhotel){
    reservas.forEach(reserva => {
        if(idhotel == reserva.idhotel){
            let i = idhotel - 1
            console.log("hotel :", hoteis[i].Nome)
            console.log("responsável :",  reserva.NomeResponsavel)
            console.log("dia de entrada :",  reserva.diaEntrada)
            console.log("dia de saída :",  reserva.diasaida)
        }
    })
}

function procurarhotelpelareserva (idreserva){
let idhotel = reservas[idreserva - 1].idhotel
console.log("hotel :", hoteis[idhotel - 1].Nome)
console.log("endereço :", hoteis[idhotel - 1].endereço)
console.log("dia de entrada :", reservas    [idreservas - 1].diaEntrada)
console.log("dia de saída :",  reservas[idreservas - 1].diasaida)
}

function procuraReservaResponsável(nome){
for(let i = 0; i < reservas.length; i++){
    if(nome == reserva[i].NomeResponsavel){
        console.log("id da reserva :" + reservas[i].Id)
        console.log("hotel :" + hoteis[(reservas[i].idhotel) - 1].nome)
    }
}
}

let continuar = true
do{
    let opcao = prompt("escolha uma opção/ cadastrar um hotel = 1/ cadastrar uma reserva = 2/procurar reserva pelo hotel = 3/procurar hotel pela reserva = 4/ procurar reserva pelo responsável = 5/encerrar programa = 6")

    switch(opcao){
        case "1":cadastrarHotel()
        break;

        case "2": cadastrarReserva()
        break;

        case "3": procurarReservaHotel()
        break;

        case"4":procurarhotelpelareserva()
        break;

        case "5": procuraReservaResponsável()
        break;

        case "6": console.log("encerrando programa")
        continuar = false
        break;
        default:
            console.log("opção inválida")
            break;
    }
    
}while(continuar)