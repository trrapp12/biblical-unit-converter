(()=>{
    // const sideBars = document.getElementsByClassName('accordion-bar');
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    const topBar = document.getElementById('english-side-bar');
    const bottomBar = document.getElementById('hebrew-side-bar');

    function iterateObject (obj) {
        console.log(obj)
        if (window.innerWidth < 1600) {
            for (let [key, value] of Object.entries(obj)) {
                value.classList.add('hidden')
            }

        } else if (window.innerWidth > 1600) {
            for (let [key, value] of Object.entries(obj)) {
                value.classList.remove('hidden')
            }
        }
    }

    function toggleStateTop() {
        for (let [key, value] of Object.entries(hebrewWords)) {
            value.classList.toggle('hidden')
        }
    }

    function toggleStateBottom() {
        for (let [key, value] of Object.entries(rightAligned)) {
            value.classList.toggle('hidden')
        }
    }


    window.addEventListener('resize', () => {
        iterateObject(hebrewWords);
        iterateObject(rightAligned);
    })

    topBar.addEventListener('click', toggleStateTop)
    bottomBar.addEventListener('click', toggleStateBottom)   
})();