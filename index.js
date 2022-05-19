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
    const lengthElements = document.querySelectorAll('.length');
    
    for (let i = 0; i < lengthElements.length; i ++) {
      console.log(lengthElements[i])
      lengthElements[i].innerText = data.prop
    }
  }
})();