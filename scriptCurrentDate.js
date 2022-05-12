let currentDate = document.getElementById('currentDate');
let dateElement = document.createElement('p');

dateElement.id = 'date';

let date = new Date();
let [mes, dia, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

dateElement.innerText = mes+1 + "/" + dia + "/" + year;

currentDate.appendChild(dateElement);
