(() => {
    // classNames returns an Object
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    const topBar = document.getElementById('english-side-bar');
    const bottomBar = document.getElementById('hebrew-side-bar');

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
            }, 2000)
        }
    }

    // create function that will be passed in, that will do the work, set equal to constant

    const updateCompareWidths = debounce((func)=>{
        console.log('compare widths fired')
        if (window.innerWidth < 1600) {
            toggleHidden(hebrewWords)
            toggleHidden(rightAligned)
        } else if (window.innerWidth > 1600) {
            toggleHidden(hebrewWords)
            toggleHidden(rightAligned)
        }
    }, 2000)

    // put constant into event listener

    window.addEventListener('resize', ()=> {
        console.log('resize')
        updateCompareWidths()
    })
})();


