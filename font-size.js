(() => {

  window.addEventListener('load', () => {


  console.log('entered font size js')
  const inputElement = document.getElementById('amount');
  inputElement.focus();
  let fontSize = 150;


  inputElement.addEventListener('keyup', () => {

    function setFontSize (value) {
      console.log('setFontSize firing, value is ' + value)
      inputElement.style.fontSize = `${value}px` ;
    }
  
    function testFontSize (el) {
      console.log("testFontSize firing, el is " + el)
      return el.scrollWidth > el.clientWidth;
    }
  
    function triggerFontComparison () {
      console.log("triggerFontComparision is firing")
      if (testFontSize(inputElement)) {
        console.log('entering testFontSize if statement')
        while (testFontSize(inputElement)) {
          console.log('entering first while loop')
          fontSize--; 
          setFontSize(fontSize);
        }
      } else {
        console.log('entering else statement')
        fontSize = 150;
        setFontSize(fontSize)
        while (testFontSize(inputElement)){
          console.log('entering second while loop')
          fontSize--;
          setFontSize(fontSize);
      }
    }
    }

    triggerFontComparison()
  })


  })

  

})();