(() => {
    // classNames returns an Object
    const hebrewWords = document.getElementsByClassName('hebrew');
    const rightAligned = document.getElementsByClassName('right-align');
    const topBar = document.getElementById('english-side-bar');
    const bottomBar = document.getElementById('hebrew-side-bar');

    let timeout = true;

    function toggleHidden(param) {
        for (let [key, value] of Object.entries(param)) {
            value.classList.toggle('hidden');
        }
    }

    function changeVisibilityOnSize(obj) {
        if (window.innerWidth < 1600) {
            toggleHidden(obj);
        } else if (window.innerWidth > 1600) {
            toggleHidden(obj);
        }
    }

    window.addEventListener('resize', () => {

        // if (!timeout) return;
        
        // timeout = false;

        setTimeout(()=> {
            changeVisibilityOnSize(hebrewWords);
            changeVisibilityOnSize(rightAligned);
            
        }, 600);

        // timeout = true;
    });

    function toggleAccordion(obj) {
        obj.classList.toggle('accordion-bar-hover');
    }

    topBar.addEventListener('click', toggleAccordion(topBar));
    topBar.addEventListener('mouseover', toggleAccordion(topBar));
    bottomBar.addEventListener('click', toggleAccordion(bottomBar));
    bottomBar.addEventListener('mouseover', toggleAccordion(bottomBar));
})();