// IFFE creates natural lexical scoping so the global variables in this file don't accidentally pollute name space of other JS files
(() => {
  // using an event listener nested inside a load event listener on the window object makes sure all html elements have been completely loaded before event listeners are attached.  This prevents a situation where the JS file tries to find an element that may not have loaded yet on the page
  window.addEventListener('load', () => {
    // console.log('entered font size js')
    const inputElement = document.getElementById('amount');
    inputElement.focus();
    let fontSize = 32;

    inputElement.addEventListener('keyup', () => {
      function setFontSize(value) {
        // console.log('setFontSize firing, value is ' + value)
        inputElement.style.fontSize = `${value}px`;
      }

      function testFontSize(el) {
        // console.log("testFontSize firing, el is " + el)
        return el.scrollWidth > el.clientWidth;
      }

      function triggerFontComparison() {
        // console.log("triggerFontComparision is firing")
        if (testFontSize(inputElement)) {
          // console.log('entering testFontSize if statement')
          while (testFontSize(inputElement)) {
            // console.log('entering first while loop')
            fontSize--;
            setFontSize(fontSize);
          }
        } else {
          // console.log('entering else statement')
          fontSize = 150;
          setFontSize(fontSize);
          while (testFontSize(inputElement)) {
            // console.log('entering second while loop')
            fontSize--;
            setFontSize(fontSize);
          }
        }
      }

      triggerFontComparison();
    });
  });
})();
