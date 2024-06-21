const form = document.querySelector('form');
const p = document.querySelectorAll('.text');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let bmi = 0;
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');
  if (isNaN(height) || height < 1 || height === '') {
    result.innerHTML = `<h1>Enter Valid height ${height}</h1>`;
  } else if (isNaN(weight) || weight < 1 || weight === '') {
    result.innerHTML = `<h1>Enter Valid Weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<h1>BMI : ${bmi}</h1>`;
  }
  p.forEach((item) => {
    if (bmi < 18.6) {
      if (item.getAttribute('id') === 'red') {
        item.style.color = 'red';
      } else {
        item.style.color = 'black';
      }
    } else if (bmi > 18.6 && bmi < 24.9) {
      if (item.getAttribute('id') === 'green') {
        item.style.color = 'green';
      } else {
        item.style.color = 'black';
      }
    } else if (bmi > 24.9) {
      if (item.getAttribute('id') === 'red2') {
        item.style.color = 'red';
      } else {
        item.style.color = 'black';
      }
    } else {
      item.style.color = 'black';
    }
  });
});
