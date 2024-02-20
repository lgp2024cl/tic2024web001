function mostrarcreditos(){
     alert("Autor:Lucía Garcia Paniagua\ncurso y grupo:2ºB");
   }
function ocultarSeccion() {
           document.getElementById('bloque1').style.display="none";
        }
function mostrarSeccion() {
            document.getElementById('bloque1').style.display="block";
        }
function CambiarFondo(){
  var nuevocolor = "red";
  document.getElementById('bloque1').style.backgroundColor = nuevocolor;
                 }
 function changeColor() {
        document.getElementById("backgroundcolor").style.backgroundColor = "lightgreen";
    }

    function restoreColor() {
        document.getElementById("backgroundcolor").style.backgroundColor = "";
    }
function mostrarFecha() {
            var fecha = new Date();
            alert("La fecha actual es: " + fecha);
        }
function cambiarColorFondo() {
            var segundoDiv = document.getElementById("bloque2");
            var nuevocolor = "pink";
            document.getElementById('bloque2').style.backgroundColor = nuevocolor;
        }

function restaurarColorOriginal() {
            var segundoDiv = document.getElementById("bloque2");
            var nuevocolor = "silver";
            document.getElementById('bloque2').style.backgroundColor = nuevocolor;
        }
 function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("La geolocalización no es compatible con este navegador.");
            }
        }

        function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            document.getElementById("location").innerHTML = "Latitud: " + latitude + "<br>Longitud: " + longitude;

            var map = L.map('map').setView([latitude, longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('¡Estás aquí!')
                .openPopup();
        }