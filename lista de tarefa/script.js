// var vel = 70
// console.log(`A velocidae do seu carro é ${vel}km/h`)
// if (vel > 60) {//condiçao simples
//    console.log("Você utrapassou o limite de velocidade.multado")


// }
// console.log("Dirija  sempre usando cinto de segurança")
// var pais = EUA
// if () {}
// let xbolinha = 300;
// let ybolinha = 200;
// let diametro = 35;
// let xraquete = 5
// let yraquete = 150
// let raquetecomprimento = 10
// let raquetealtura = 90

// let  velocidadexbolinha = 4
// let  velocidadeybolinha = 4

// function setup() {
//   createCanvas(600, 400);
// } 

// function draw() {
//   background(0); 
//   circle(xbolinha, ybolinha, diametro);
//  xbolinha += velocidadexbolinha
//  // ybolinha += velocidadeybolinha 
//    verificacolisaoborda()
// movimentaminharaquete ()
//  verificaColisaoRaquete()
 
  
//   rect(xraquete,yraquete,raquetecomprimento,
//        raquetealtura)
  
//   function verificacolisaoborda(){
//   if (xbolinha >  width  || 
//       xbolinha < 0 ){
//     velocidadexbolinha *= -1
//   } 
//   }
  
  
//  if(ybolinha > height || 
//     ybolinha < 0) {
//    velocidadeybolinha *= -1
   
//  }   
//   }
// function movimentaminharaquete(){
//    if (keyIsDown(UP_ARROW)){
//      yraquete -= 10
//   }
//   if (keyIsDown(DOWN_ARROW)){
//      yraquete += 10
//   }
// }
// function verificaColisaoRaquete() {
//     if (xbolinha - Math < xraquete + raquetecomprimento
        
//  && ybolinha - Math  < yraquete + raquetealtura
//  &&  yBolinha +  Math> yRaquete) {
      
//       velocidadexbolinha *= -1;
//     }
// }
// function setup() {
      
//     // Create Canvas of size 600*600
//     createCanvas(600, 600, WEBGL);
// }
   
// function draw() {
      
//     // Set background color
//     background(200);
     
//     // Set filled color of sphere
//     fill('  red    ');
     
//     // Rotate 
//     rotateX(frameCount * 0.01);
//     rotate(frameCount*0.03);
     
//     // sphere() function called
//     sphere(140);
// }
// var name  = fernando 
// var idade = 16
// console.log(`{${}`)
// var pais ="Brasil"
// console.log(`vivendo em ${pais}`)
//    if (pais == 'Brasil'){
//       console.log("Você é brasileiro!")
//    }else {
//       console.log("Você é Estrangeiro!")
//    }
// var vel = 61
// console.log(`A sua velocidade é de ${vel}km/h` )
// if (vel > 60){
//    console.log("Você utrapasou a velocidade.multado ")
// }
// console.log("Digija com cinto de segurança!")

//  function calcular(){
//    const txtv = document.getElementById("txtvel")
//    const res = document.getElementById("res")
//    const vel = Number(txtv.value)
//    res.innerHTML = `<p>A sua velocidade atual é de<strong> ${vel}km/h</strong></p>`
   
//    if (vel > 60){
//       res.innerHTML += `<p>Você foi <strong>multado</strong> por exesso de velocidade!</p>`
//    } 
//      res.innerHTML += `Dirija sempre com cinto de segurança`
// // }
// var idade = 22
// if (idade < 16){
//     console.log("Nâo vota")
// }else  if (idade <18 ){
//     console.log("voto opcional")

// }else {
//     console.log("voto obrigatorio")
// }


// var idade =100

// if (idade < 16){
//     console.log("nao vota ")
// }else if (idade < 18 || idade > 65){
//     console.log("voto opicional")
// }else if (idade >= 80){
// console.log("já faleceu")
// }
// else {
//     console.log("voto obrigatorio")
// }
// var idade = 100
// console.log(`idade: ${idade} anos.`)
// if(idade <= 80 ){
//     console.log("esta vivo(a)")
// }else{
//     console.log("já morreu.")
// }
// var agora = new Date()
// var hora = agora.getHours()
// console.log(`agora sâo ${hora} horas`)
// if(hora <= 12){
//     console.log("Buongiorno")
// }else if( hora <= 18){
// console.log("buon pomeriggio")
// }else {
//     console.log("Buona notte")
// }
// var agora = new Date()
// var diaSem = agora.getDay()
/*sequencia numerica!
0 = domingo
1 = segunda 
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
// 
// diaSem = 7
// switch(diaSem){
//     case 0:
//         console.log("domingo")
//         break
//      case 1:
//         console.log("segunda")
//         break
//     case 2:
//         console.log("terça")
//         break
//     case 3:
//         console.log("quarta")
//         break
//     case 4:
//        console.log("quinta")
//        break
//     case 5:
//       console.log("sexta")
//       break
//     case 6:
//         console.log("sabado")
//     default:
//       console.log("[ERRO] dia invalido!")
//       break
// setTimeout(() => {
//     }
// }, timeout);
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}
    
function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}