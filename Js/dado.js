function Jogar(){


var sorteio = Math.floor(Math.random () * 6 + 1);

switch(sorteio){
    case 1:
            document.getElementById("face").src = "./img/um.png";
            break;
    case 2:
            document.getElementById("face").src = "./img/dois.png";
            break;        
    case 3:
                document.getElementById("face").src = "./img/tres.png";
                break;
    case 4:
                    document.getElementById("face").src = "./img/quatro.png";
                    break;  
                    
    case 5:
                        document.getElementById("face").src = "./img/cinco.png";
                        break;                
    case 6:
                            document.getElementById("face").src = "./img/seis.png";
                            break;
    default:
        break;
}
}