(()=>{

  const data = {
    value: '',
  };

  Object.defineProperty(data, 'prop', {
    get: function () {
      console.log('getter called');
      return this.value;
    },
    set: function (value) {
      console.log('setter called');
      this.value = value;
      displayNumber();
    }
  })

  document.getElementById('amount').addEventListener('keyup', (event) => {
    data.prop = event.target.value;
  })

  function displayNumber () {
    const lengthElements = document.querySelectorAll('.bind');
    const feetToEtzbaDisplay = document.getElementById('conversion--1');
    const etzbaToFeetDisplay = document.getElementById('conversion--2');
    const feetToTefachDisplay = document.getElementById('conversion--3');
    const tefachToFeetDisplay = document.getElementById('conversion--4');
    const feetToZeretDisplay = document.getElementById('conversion--5');
    const zeretToFeetDisplay = document.getElementById('conversion--6');
    const feetToAmahDisplay = document.getElementById('conversion--7');
    const amahToFeetDisplay = document.getElementById('conversion--8');
    const feetToRisDisplay = document.getElementById('conversion--9');
    const risToFeetDisplay = document.getElementById('conversion--10');
    const feetToMilDisplay = document.getElementById('conversion--11');
    const milToFeetDisplay = document.getElementById('conversion--12');
    const feetToParasaDisplay = document.getElementById('conversion--13');
    const parasaToFeetDisplay = document.getElementById('conversion--14');
    
    for (let i = 0; i < lengthElements.length; i ++) {
      // console.log(lengthElements[i])
      let currentNumber = data.prop;
      lengthElements[i].innerText = currentNumber;

      feetToEtzbaDisplay.innerText = etzba(currentNumber, 'feet');
      etzbaToFeetDisplay.innerText = etzba(currentNumber, 'etzba');
      feetToTefachDisplay.innerText = tefach(currentNumber, 'feet');
      tefachToFeetDisplay.innerText = tefach(currentNumber, 'tefach');
      feetToZeretDisplay.innerText = zeret(currentNumber, 'feet');
      zeretToFeetDisplay.innerText = zeret(currentNumber, 'zeret');
      feetToAmahDisplay.innerText = amah(currentNumber, 'feet');
      amahToFeetDisplay.innerText = amah(currentNumber, 'amah');
      feetToRisDisplay.innerText = ris(currentNumber, 'feet');
      risToFeetDisplay.innerText = ris(currentNumber, 'ris');
      feetToMilDisplay.innerText = mil(currentNumber, 'feet');
      milToFeetDisplay.innerText = mil(currentNumber, 'mil');
      feetToParasaDisplay.innerText = parasa(currentNumber, 'feet');
      parasaToFeetDisplay.innerText = parasa(currentNumber, 'parasa');
    }
  }

  function etzba(amount, start) {
    if (start === 'feet') {
      return (amount * (11.28)).toFixed(3)
    } else {
      return (amount / (11.28)).toFixed(3)
    }
  }

  function tefach(amount, start) {
    if (start === 'feet') {
      return (amount * (12 / 3.16)).toFixed(3)
    } else {
      return (amount * (3.16 / 12)).toFixed(3)
    }
  }

  function zeret(amount, start) {
    if (start === 'feet') {
      return (amount * (12 / 9.48)).toFixed(3)
    } else {
      return (amount * (9.48 / 12)).toFixed(3)
    }
  }

  function amah(amount, start) {
    if (start === 'feet') {
      return (amount * (12 / 18.96)).toFixed(3)
    } else {
      return (amount * (18.96 / 12)).toFixed(3)
    }
  }

  function mil(amount, start) {
    if (start === 'feet') {
      return (amount * 3145).toFixed(3)
    } else {
      return (amount / 3145).toFixed(3)
    }
  }

  function ris(amount, start) {
    if (start === 'feet') {
      return (amount / 421.3).toFixed(3)
    } else {
      return (amount * 421.3).toFixed(3)
    }
  }

  function parasa (amount, start) {
    if (start === 'feet') {
      return (amount / 12724.8).toFixed(3)
    } else {
      return (amount * 12724.8).toFixed(3)
    }
  }
  
})();

