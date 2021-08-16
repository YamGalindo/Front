const premioTotal = 2500;
const casilla = 10;
const finalRuleta = 25;

    function calcular(aciertos){
        let resultado = (aciertos/casilla) * premioTotal;
        return resultado;
    }

    function resultadoLoteria(sueño){
        console.log(sueño);

        let random = parseInt(Math.random()*4);
        switch(random){
            case 0 : 
            console.log(1000);
            break;
            case 1 : 
            console.log(10000);
            break;
            case 2 : 
            console.log(10000);
            break;
            case 3 : 
            console.log(100000);
            break;
        }
    }

    function tirarRuleta(){
        let ganador = parseInt(Math.random()*25+1);

        for (let i = 1; i <= finalRuleta; i++){
            if(i === ganador){
                console.log("Numero ganador. " + ganador);
            }else{
                console.log(i);
            }
        }
    }

//console.log(calcular(9));
//resultadoLoteria("xd");
//tirarRuleta();

// Analisis de codigo 
/*  1. C 
    2. A
*/
