(() => {
    // classNames returns an Object
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    const combinedElements = [...hebrewWords, ...rightAligned];


    

    //create a function that will iterate through object and toggle classes 



    function toggleHidden(param) {
        for (let [key, value] of Object.entries(param)) {
            value.classList.toggle('hidden');
        }
    }

    // create a function that takes a callback, sets a default timeout, returns another function that clearsInterval, sets new interval

    function debounce (callback, delay = 1000) {
        console.log('debounce fired')
        let timeout; 
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                callback(...args)
            }, 250)
        }
    }

    // create function that will be passed in, that will do the work, set equal to constant

    const updateCompareWidths = debounce((func)=>{

        for (let [key, value] of Object.entries(combinedElements)) {
            if (window.innerWidth < 1600 && !value.classList.contains('hidden')) {
                toggleHidden(hebrewWords);
                toggleHidden(rightAligned);
            } else if (window.innerWidth > 1600 && value.classList.contains('hidden')) {
                toggleHidden(hebrewWords);
                toggleHidden(rightAligned);
                console.log('dont need to change it');
            }
        }
    }, 250)

    // put constant into event listener

    window.addEventListener('resize', ()=> {
        console.log('resize')
        updateCompareWidths()
    })


// Event Listener for setting original height

    function setInitialClass(param) {
        if (window.innerWidth < 1600) {
            for (let [key, value] of Object.entries(param)) {
                value.classList.add('hidden')
            }
        } else if (window.innerWidth >= 1600) {
            for (let [key, value] of Object.entries(param)) {
                value.classList.remove('hidden')
            }
        }
    }

    window.addEventListener('load', ()=> {
        setInitialClass(hebrewWords);
        setInitialClass(rightAligned);
    })
})();


