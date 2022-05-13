let currentDate = document.getElementById('currentDate');
let dateElement = document.createElement('p');
let hourElement = document.createElement('p');

dateElement.id = 'date';
hourElement.id = 'hour';

let date = new Date();
let [mes, dia, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
let [lahora, minuto, segundo] = [date.getHours(), date.getMinutes(), date.getSeconds()];

dateElement.innerText = mes + 1 + "/" + dia + "/" + year;
hourElement.innerText = lahora + ":" + minuto + ":" + segundo;

currentDate.appendChild(dateElement);
currentDate.appendChild(hourElement);

RefreshTime();

function RefreshTime() {
    intervalSegs = setInterval(RefreshSegs, 1000)
}
function RefreshSegs() {

let hourElementToRefresh = document.getElementById('hour');

if (hourElementToRefresh != null) {  
    hourElementToRefresh.remove();
}

let newDate = new Date();
let [lahora, minuto, segundo] = [newDate.getHours(), newDate.getMinutes(), newDate.getSeconds()];
let ceroHora = "";
let ceroMinuto = "";
let ceroSegundo = "";

if (lahora < 10) {
    ceroHora = 0;
}else {ceroHora = "";}
if (minuto < 10) {
    ceroMinuto = 0;
}else {ceroMinuto = "";}
if (segundo < 10) {
    ceroSegundo = 0;
}else {ceroSegundo = "";}


let hourElementNew = document.createElement('p');
hourElementNew.id = 'hour';
hourElementNew.innerText = ceroHora + lahora + ":" + ceroMinuto + minuto + ":" + ceroSegundo + segundo;
currentDate.appendChild(hourElementNew);
}