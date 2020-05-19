//Form var
var questionWeight = document.querySelector('#questionWeight');
var questionHeight = document.querySelector('#questionHeight');

// MODAL var
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

//FUNCTINON MODAL JS
modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
  bmiCalculator(
    parseFloat(questionWeight.value),
    parseFloat(questionHeight.value)
  );
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});

// Function BMI

function bmiCalculator(weight, height) {
  bmi = (weight / Math.pow(height, 2)).toFixed(2);
  if (bmi < 18.5) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi1.svg';

    //Color
    document.querySelector('#youColor').style.color = '#ffea2c';

    //Weight

    document.querySelector('#weight').innerHTML = 'DELGADEZ';
    document.querySelector('#weight').style.color = '#ffea2c';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Tu IMC es ' +
      bmi +
      '. La delgadez puede ser genética o por diversos factores como malnutrición. Por favor consulta a tu doctor.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi2.svg';

    //Color
    document.querySelector('#youColor').style.color = '#f29f05';

    //Weight
    document.querySelector('#weight').innerHTML = 'un PESO NORMAL';
    document.querySelector('#weight').style.color = '#f29f05';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Tu IMC es ' +
      bmi +
      ' ¡Felicitaciones! Estas con un peso normal. Recuerda comer sano y ejercitarte';
  } else if (bmi > 24.9 && bmi < 30) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi3.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff781d';
    //Weight
    document.querySelector('#weight').innerHTML = 'SOBREPESO';
    document.querySelector('#weight').style.color = '#ff781d';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Tu IMC es ' +
      bmi +
      '. Por favor consulta a tu doctor. Chequea algunos ejercicios o dietas saludables para tu día a día.';
  } else if (bmi >= 30 && bmi < 35) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi4.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff4715';

    //Weight
    document.querySelector('#weight').innerHTML = 'OBESIDAD MODERADA';
    document.querySelector('#weight').style.color = '#ff4715';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Tu IMC es ' +
      bmi +
      '. Por favor consulta a tu doctor. El exceso de grasa corporal está asociado con diversas enfermedades.';
  } else if (bmi > 34) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi5.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff0000';

    //Weight
    document.querySelector('#weight').innerHTML = 'OBESIDAD EXTREMA';
    document.querySelector('#weight').style.color = '#ff0000';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Tu IMC es ' +
      bmi +
      '. Por favor consulta a tu doctor lo más pronto posible. La obesidad es una enfermedad que afecta tu vida, te queremos vivo.';
  } else {
    document.querySelector('#resultado').innerHTML =
      'Por favor tipea tu altura en metros y peso en kilogramos.';
  }
}
