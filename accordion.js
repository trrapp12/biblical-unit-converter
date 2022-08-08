(()=>{
    // const sideBars = document.getElementsByClassName('accordion-bar');
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    const topBar = document.getElementById('english-side-bar');
    const bottomBar = document.getElementById('hebrew-side-bar');

    function iterateObject (obj) {
        console.log(obj)
        if (window.innerWidth < 1200) {
            for (let [key, value] of Object.entries(obj)) {
                value.classList.add('hidden')
            }

        } else if (window.innerWidth > 1200) {
            for (let [key, value] of Object.entries(obj)) {
                value.classList.remove('hidden')
            }
        }
    }

    function toggleState(obj) {
        for (let [key, value] of Object.entries(obj)) {
            value.classList.toggle('hidden')
        }
    }


    window.addEventListener('resize', () => {
        iterateObject(hebrewWords);
        iterateObject(rightAligned);
    })

    topBar.addEventListener('click', toggleState(topBar))
    bottomBar.addEventListener('click', toggleState(rightAligned))

    
})();