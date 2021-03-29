function Jogar(){


var sorteio = Math.floor(Math.random () * 6 + 1);

switch(sorteio){
    case 1:
            document.getElementById("face").src = "um.png";
            break;
    case 2:
            document.getElementById("face").src = "dois.png";
            break;        
    case 3:
                document.getElementById("face").src = "tres.png";
                break;
    case 4:
                    document.getElementById("face").src = "quatro.png";
                    break;  
                    
    case 5:
                        document.getElementById("face").src = "cinco.png";
                        break;                
    case 6:
                            document.getElementById("face").src = "seis.png";
                            break;
    default:
        break;
}
}