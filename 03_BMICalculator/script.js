const form  = document.querySelector('form');

//this usecase will give empty value.
// const height = parseInt(document.querySelector('#height).value);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        //results.innerHTML = `<span>${bmi}</span> <br /> `;

        if ( bmi < 18.6){
            results.innerHTML = `<span> ${bmi} </span> <br /> <span>
            Under Weight</span>`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>${bmi}</span> <br /> <span> Normal Weight</span`;
          } else {
            results.innerHTML = `<span>${bmi}</span> <br /> <span> Over Weight</span`;
          }
    }

});