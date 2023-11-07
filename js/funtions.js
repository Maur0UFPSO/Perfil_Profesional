// tipos de variables 

// const para constante 
const pi=3.1416;
const pul=2.54;
// var para variables globales
var cont_day= 10;
var name='Mauricio';
// let para variables locales
let counter=0;
let i = 1;

// ################Formas de Impresion#########################
alert('Impresion');
console.log (counter);

// bodypantalla

document.write(counter);
document.getElementById('text_one').innerHTML = "<h1>Hola Mundo</h1>"
document.getElementById('text_two').innerText = "<h1>Hola Mundo</h1>"

// https://sweetalert2.github.io/
Swal.fire({
    icon: 'success',
    title: 'Oops...',
    text: 'JEJEJEJEJEJEJEJE',
    footer: 'y si..........?'
  })

  //############### Tipo de datos################
  //numericos 
  let number_one =10;
  let number_two = 5.5;
  //
  let text ="soy un texto";
  //
  let boolean = true;
  let boolean_2 = false;
  //
  let array_num = [1,2,3,4,5];
  let array_text = ["juan", "maria" , "Jose Carlos"];
  let array_mix = ["juan",1 , "Jose Carlos", 2];
  // let  array_mul = [
  //   {name:pedro ,last_name: perez  ,age:12},
  //   {name:Kevin ,last_name:perez  ,age:35},
  //   {name:Jose ,last_name: perez ,age:63},
  //   {name:David ,last_name:perez  ,age:4}
  //################################
  var nombre_de_la_variable = "operaciones";
  //############################################################ESTUDIAR METODOS##########################################
  // ############################ operadores logicos y estructuras condicionales ##################################################
  var bool = false;
  var numeric = 5;
  if (!bool){
    console.log("ingresa if :" + bool);
  }
  else{
    console.log(bool);
  }
  //############################################################## === mira el valor del dato estrictamente igual #######################################################
  // or || con if
  var age = 31;
  if (age==31 || numeric=="5") {
    console.log("ingresa if :" + bool);
  }
else{
  console.log("ingresa if :" + bool);
}

//##########################################################################################################################################

  for (let i = 0; i < 7; i++) {
    console.log(array_text[i]);
  }

  //crear funciones
  function load_page() {
    alert ("Bienvenido ")
  }
 function change_color() {
   document.body.style.backgroundColor = "red";
   document.body.style.color = "#FFF";
 }

 const btn_clear = document.querySelector("#limpiar")
 btn_clear.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#000";
 })

 //Fomulario de registro
 const form_register = document.getElementById ("form_register")
 const nombres = document.getElementById ("nombres")
 const apellidos= document.getElementById ("apellidos")
 const validation = document.getElementById ("validation")

 form_register.addEventListener("submit", event_name => {
   event_name.preventDefault();
   let info= "";
   if (nombres.value.length <=2 || apellidos.value.length<=2) {
     info+= "Nombres y/o apellidos deben ser mayores a dos letras"
     validation.style.color="red"
   }
   else{
    alert(nombres + " " + apellidos)
    nombres.style.backgroundColor ="green";
    apellidos.style.backgroundColor ="green";
   }
   validation.innerText = info;
 }) 

 function load_page(){
   document.getElementById("nombres").focus();
   document.getElementById("apellidos").disable = true;
 }
function validate(){
  // alert ("funciona")
  let nombres = document.getElementById("nombres").value;
  console.log(nombres);
  // .value es un atributo

}


// ###########################################################################################################################
