
///exo2
// variables
let exo1Active=document.getElementsByClassName("exo1")[0];
let btnExo1=document.getElementsByClassName("btnExo1")[0];
let exo2Active=document.getElementsByClassName("exo2")[0];
let btnExo2=document.getElementsByClassName("btnExo2")[0];
let exo3Active=document.getElementsByClassName("exo3")[0];
let btnExo3=document.getElementsByClassName("btnExo3")[0];
let exo4Active=document.getElementsByClassName("exo4")[0];
let btnExo4=document.getElementsByClassName("btnExo4")[0];
let exo5Active=document.getElementsByClassName("exo5")[0];
let btnExo5=document.getElementsByClassName("btnExo5")[0];
let exo6Active=document.getElementsByClassName("exo6")[0];
let btnExo6=document.getElementsByClassName("btnExo6")[0];
//Fonctions
let activeExo1=() => {
    exo1Active.setAttribute("style","display:block;")
    exo2Active.setAttribute("style","display:none;")
    exo3Active.setAttribute("style","display:none;")
    exo4Active.setAttribute("style","display:none;")
    exo5Active.setAttribute("style","display:none;")
    exo6Active.setAttribute("style","display:none;")
}
let activeExo2=() => {
    exo2Active.setAttribute("style","display:block;")
    exo1Active.setAttribute("style","display:none;")
    exo3Active.setAttribute("style","display:none;")
    exo4Active.setAttribute("style","display:none;")
    exo5Active.setAttribute("style","display:none;")
    exo6Active.setAttribute("style","display:none;")
}
let activeExo3=() => {
    exo3Active.setAttribute("style","display:block;")
    exo2Active.setAttribute("style","display:none;")
    exo1Active.setAttribute("style","display:none;")
    exo4Active.setAttribute("style","display:none;")
    exo5Active.setAttribute("style","display:none;")
    exo6Active.setAttribute("style","display:none;")
}
let activeExo4=() => {
    exo4Active.setAttribute("style","display:block;")
    exo2Active.setAttribute("style","display:none;")
    exo3Active.setAttribute("style","display:none;")
    exo1Active.setAttribute("style","display:none;")
    exo5Active.setAttribute("style","display:none;")
    exo6Active.setAttribute("style","display:none;")
}
let activeExo5=() => {
    exo5Active.setAttribute("style","display:block;")
    exo2Active.setAttribute("style","display:none;")
    exo3Active.setAttribute("style","display:none;")
    exo4Active.setAttribute("style","display:none;")
    exo1Active.setAttribute("style","display:none;")
    exo6Active.setAttribute("style","display:none;")
}
let activeExo6=() => {
    exo6Active.setAttribute("style","display:block;")
    exo2Active.setAttribute("style","display:none;")
    exo3Active.setAttribute("style","display:none;")
    exo4Active.setAttribute("style","display:none;")
    exo5Active.setAttribute("style","display:none;")
    exo1Active.setAttribute("style","display:none;")
}

//Ecouteurs d'évenements
btnExo1.addEventListener("click",activeExo1);
btnExo2.addEventListener("click",activeExo2);
btnExo3.addEventListener("click",activeExo3);
btnExo4.addEventListener("click",activeExo4);
btnExo5.addEventListener("click",activeExo5);
btnExo6.addEventListener("click",activeExo6);
///exo1
let h2Exo1= document.getElementsByClassName("h2exo1")[0];
console.log(h2Exo1)
h2Exo1.innerText="Le titre modifié";
h2Exo1.setAttribute("style","color:orange;");
h2Exo1.setAttribute("class","bg-danger");
///exo3Active
let spanTarget=document.getElementsByClassName("spanExo3")[0];
let inp=document.getElementsByClassName("inputExo3")[0];
console.log(inp.value);
let bttnExo3=document.getElementsByClassName("bttnExo3")[0];
console.log(bttnExo3)
let changeSpan=()=>{
    spanTarget.innerHTML=inp.value
    inp.value=""
}
bttnExo3.addEventListener("click",changeSpan);
///exo4
let blocRouge=document.getElementsByClassName("rouge")[0];
let btnJaune=document.getElementsByClassName("btnJaune")[0];
let bleu1=document.getElementsByClassName("bleu1")[0];
let bleu2=document.getElementsByClassName("bleu2")[0];
let compteur=document.getElementsByClassName("compteur")[0];
let i = 0
let position=()=>{
    if (i%2==0) {
        bleu2.appendChild(blocRouge);
    }else{
        bleu1.appendChild(blocRouge);
    }
    i++;
    compteur.textContent=i
};
btnJaune.addEventListener("click",position)
///exo5
let btn9=document.getElementsByClassName("btnOeuf")[0];
let divExo5=document.getElementsByClassName("exo5")[0];
let pondre=()=>{
    let oeuf=document.createElement("img");
    oeuf.setAttribute("src","./public/img/oeuf.png")
    divExo5.insertAdjacentElement('beforeend',oeuf);
    alert("Félicitation, vous venez de pondre un oeuf!")
}
btn9.addEventListener("click",pondre);
///exo6
let inp1=document.getElementsByClassName("inp1")[0];
let inp2=document.getElementsByClassName("inp2")[0];
let egal=document.getElementsByClassName("egal")[0];
let result=document.getElementsByClassName("resultat")[0];
add=()=>{
    let x = Number(inp1.value);
    let y = Number(inp2.value);
    result.innerHTML=x+y
}
egal.addEventListener("click",add)
///exo6 part2
// Variables
let un = document.getElementsByClassName('un')[0];
let deux = document.getElementsByClassName('deux')[0];
let trois = document.getElementsByClassName('trois')[0];
let quatre = document.getElementsByClassName('quatre')[0];
let cinq = document.getElementsByClassName('cinq')[0];
let six = document.getElementsByClassName('six')[0];
let sept = document.getElementsByClassName('sept')[0];
let huit = document.getElementsByClassName('huit')[0];
let neuf = document.getElementsByClassName('neuf')[0];
let zero = document.getElementsByClassName('zero')[0];
let plus = document.getElementsByClassName('plus')[0];
let moins = document.getElementsByClassName('moins')[0];
let fois = document.getElementsByClassName('fois')[0];
let divise = document.getElementsByClassName('divise')[0];
let clear = document.getElementsByClassName('clear')[0];
let egale = document.getElementsByClassName('egale')[0];
let calc = document.getElementsByClassName("calc")[0];
let calcResult = document.getElementsByClassName("calcResult")[0];

// fonctions numeriques
un.addEventListener("click",()=>{
    calc.value = calc.value +1
});
deux.addEventListener("click",()=>{
    calc.value = calc.value +2
});
trois.addEventListener("click",()=>{
    calc.value = calc.value +3
});
quatre.addEventListener("click",()=>{
    calc.value = calc.value +4
});
cinq.addEventListener("click",()=>{
    calc.value = calc.value +5
});
six.addEventListener("click",()=>{
    calc.value = calc.value +6
});
sept.addEventListener("click",()=>{
    calc.value = calc.value +7
});
huit.addEventListener("click",()=>{
    calc.value = calc.value +8
});
neuf.addEventListener("click",()=>{
    calc.value = calc.value +9
});
zero.addEventListener("click",()=>{
    calc.value= calc.value +0
});
clear.addEventListener("click",()=>{
    calc.value=""
    calcResult.innerHTML=""
});
//variables Temporaires
let nb
let operateur
let resultat
//operateurs
plus.addEventListener("click",()=>{
    nb=calc.value
    calc.value=""
    operateur= "+"
});
moins.addEventListener("click",()=>{
    nb=calc.value
    calc.value=""
    operateur= "-"
});
fois.addEventListener("click",()=>{
    nb=calc.value
    calc.value=""
    operateur= "*"
});
divise.addEventListener("click",()=>{
    nb=calc.value
    calc.value=""
    operateur= "/"
});
egale.addEventListener("click",()=>{
    switch (operateur) {
        case "+": resultat = Number(nb) + Number(calc.value)
        calcResult.innerHTML = `${nb}  +  ${calc.value}  =  ${resultat}`
            
            
            break;
        case "-": resultat = Number(nb) - Number(calc.value)
        calcResult.innerHTML = `${nb}  -  ${calc.value}  =  ${resultat}`   
            break;
        case "*": resultat = Number(nb) * Number(calc.value)
        calcResult.innerHTML = `${nb}  *  ${calc.value}  =  ${resultat}`    
            break;
        case "/": resultat = Number(nb) / Number(calc.value)
        calcResult.innerHTML = `${nb}  :  ${calc.value}  =  ${resultat}`    
            break;
    
        default:
            break;
    }
});




