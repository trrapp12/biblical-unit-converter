(()=>{
    const englishSideBar = document.getElementById('english-side-bar');
    const hebrewSideBar = document.getElementById('hebrew-side-bar');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1200) {
            console.log(window.innerWidth)
            englishSideBar.classList.add('hidden');
            hebrewSideBar.classList.add('hidden');
        } else if (window.innerWidth > 1200) {
            console.log(window.innerWidth)
            englishSideBar.classList.remove('hidden');
            hebrewSideBar.classList.remove('hidden');
        }

    })
    
})();