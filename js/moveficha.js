var x = -70, y = 760;
var w = -70, z = 760;


function ejecucion(){
alert("comienza");
empezar();

mover1();
mover2();
}


function mover1() {


var ims = document.getElementById("ims");
var img = document.getElementById("ima");
var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,1500,1500);//limpia todo el canvas
ctx.drawImage(img,x,y,60,60);//dibuja la imagen
ctx.drawImage(ims,w,z,60,60);//dibuja la imagen

	
}

function limpiar(){


}
function mover2() {
var img = document.getElementById("ima");
var ims = document.getElementById("ims");
var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,1500,1500);//limpia todo el canvas

ctx.drawImage(ims,w,z,60,60);//dibuja la imagen
ctx.drawImage(img,x,y,60,60);//dibuja la imagen
    
}

function whichButton(event){

if (x==50 && y==40) {
        
        alert("Ganaste!");

       }else{ 
        

if (x<1120){

if(event.keyCode=='39'){//para la tecla de la derecha

x=x+120;//mueve la nave 5 pixeles a la derecha

mover1();

}}


if (x>120){
if(event.keyCode=='37'){//para la tecla de la izquierda
x=x-120;//
//x=x-5;//mueve la nave 5 pixeles a la izquierda

mover1();

}}

if (y>100){
if(event.keyCode=='38'){//para la tecla de arriba

y=y-80;//sube la imagen 5 pixeles

mover1();

}}
if (y<760){
if(event.keyCode=='40'){// para la tecla hacia abajo

y=y+80;//baja la imagen 5 pixeles

mover1(); 
//calle antigua colonia monserat, local 3 interseccion 49 ave sur, boulevard proseres, frente al smart center, ruta 44, oficinas color rojo y blanco
//lic. marsela ayanes

}}

if (x==50 && y==40) {
        
        parar();

    }

        
    };




if (w==50 && z==40) {
        
        alert("Ganaste!");
        parar();
       }else{ 
        

if (w<1120){

if(event.keyCode=='68'){//para la tecla de la derecha

w=w+120;//mueve la nave 5 pixeles a la derecha

mover2();

}}


if (w>120){
if(event.keyCode=='65'){//para la tecla de la izquierda
w=w-120;//
//w=w-5;//mueve la nave 5 pixeles a la izquierda

mover2();

}}

if (z>100){
if(event.keyCode=='87'){//para la tecla de arriba

z=z-80;//sube la imagen 5 pixeles

mover2();

}}
if (z<760){
if(event.keyCode=='83'){// para la tecla hacia abajo

z=z+80;//baja la imagen 5 pixeles

mover2(); 
//calle antigua colonia monserat, local 3 interseccion 49 ave sur, boulevard proseres, frente al smart center, ruta 44, oficinas color rojo y blanco
//lic. marsela ayanes

}}

if (w==50 && z==40) {
        
        parar();

    }

        
    };




}







  //cronometro
      window.onload = function() {

    visor=document.getElementById("reloj"); //localizar pantalla del reloj
    //asociar eventos a botones: al pulsar el botón se activa su función.
    //document.cron.boton1.onclick = activo; 
    document.cron.boton2.onclick = pausa;
    document.cron.boton1.disabled=false;
    document.cron.boton2.disabled=true;
    //variables de inicio:
    var marcha=0; //control del temporizador
    var cro=0; //estado inicial del cronómetro.
  
    }

    //Botón 1: Estado empezar: Poner en marcha el crono
    function empezar() {

          emp=new Date() //fecha inicial (en el momento de pulsar)
          elcrono=setInterval(tiempo,10); //función del temporizador.
          marcha=1 //indicamos que se ha puesto en marcha.
          document.cron.boton1.value="Reiniciar"; //Cambiar estado del botón
          document.cron.boton2.disabled=false; //activar botón de pausa

          }
    //función del temporizador      
    function tiempo() { 
         actual=new Date(); //fecha a cada instante
            //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
         cro=actual-emp; //milisegundos transcurridos.
         cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.
         cr.setTime(cro); 
            //obtener los distintos formatos de la fecha:
         cs=cr.getMilliseconds(); //milisegundos 
         cs=cs/10; //paso a centésimas de segundo.
         cs=Math.round(cs); //redondear las centésimas
         sg=cr.getSeconds(); //segundos 
         mn=cr.getMinutes(); //minutos 
         
            //poner siempre 2 cifras en los números    
         if (cs<10) {cs="0"+cs;} 
         if (sg<10) {sg="0"+sg;} 
         if (mn<10) {mn="0"+mn;} 
            //llevar resultado al visor.     
         visor.innerHTML=mn+" "+sg+" "+cs; 
         }
    //parar el cronómetro
    function parar() { 
         clearInterval(elcrono); //parar el crono
         marcha=0; //indicar que está parado.
         document.cron.boton2.value="Continuar"; //cambiar el estado del botón
         }     
    //Continuar una cuenta empezada y parada.
    function continuar() {
         emp2=new Date(); //fecha actual
         emp2=emp2.getTime(); //pasar a tiempo Unix
         emp3=emp2-cro; //restar tiempo anterior
         emp=new Date(); //nueva fecha inicial para pasar al temporizador 
         emp.setTime(emp3); //datos para nueva fecha inicial.
         elcrono=setInterval(tiempo,10); //activar temporizador
         marcha=1; //indicar que esta en marcha
         document.cron.boton2.value="parar"; //Cambiar estado del botón
         document.cron.boton1.disabled=false; //activar boton 1 si estuviera desactivado
         }
    //Volver al estado inicial
    function reiniciar() {
         if (marcha==1) {  //si el cronómetro está en marcha:
             clearInterval(elcrono); //parar el crono
             marcha=0;  //indicar que está parado
             }
             //en cualquier caso volvemos a los valores iniciales
         cro=0; //tiempo transcurrido a cero
         visor.innerHTML = "00 : 00 : 00"; //visor a cero
         document.cron.boton1.value="Empezar"; //estado inicial primer botón
         document.cron.boton2.value="Parar"; //estado inicial segundo botón
         document.cron.boton2.disabled=true;  //segundo botón desactivado  
         }  

  
/*JUGADOR DOSSSSSSSSSSSSSSS*/



        var face0=new Image()
        face0.src="img/img/dado1.png"
        var face1=new Image()
        face1.src="img/img/dado2.png"
        var face2=new Image()
        face2.src="img/img/dado3.png"
        var face3=new Image()
        face3.src="img/img/dado4.png"
        var face4=new Image()
        face4.src="img/img/dado5.png"
        var face5=new Image()
        face5.src="img/img/dado6.png"

function lanzar()
    {
        var randomdice=Math.round(Math.random()*5);
        document.images["mydice"].src=eval("face"+randomdice+".src");

    }


window.onload = ejecucion();
