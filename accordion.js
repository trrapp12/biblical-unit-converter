(() => {
    // classNames returns an Object
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    // Id's
    const topBar = document.getElementById('english-side-bar');
    const bottomBar = document.getElementById('hebrew-side-bar');

    let timeout = true;

    function toggleHidden(param) {
        for (let [key, value] of Object.entries(param)) {
            value.classList.toggle('hidden')
        }
    }

    function toggleAccordion(param) {
        param.classList.toggle('accordion-bar-hover')
    }

    function changeVisibilityOnSize(obj) {
        let x = obj
        if (window.innerWidth < 1600) {
            toggleHidden(x)
        } else if (window.innerWidth > 1600) {
            toggleHidden(x)
        }
    }

    window.addEventListener('resize', () => {
        console.log(`window event listener ${timeout}`)
        if (!timeout) return;
        
        timeout = false;

        setTimeout(()=> {
            changeVisibilityOnSize(hebrewWords);
            changeVisibilityOnSize(rightAligned);
        }, 300)
    })

    topBar.addEventListener('click', toggleHidden);
    topBar.addEventListener('mouseover', toggleHidden);
    bottomBar.addEventListener('click', toggleAccordion);
    bottomBar.addEventListener('mouseover', toggleAccordion)

})();