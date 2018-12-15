function myFunction(x) {
    x.classList.toggle("change");
}

function useIsotope(event) {

    // init Isotope
    let isotopeGrid = new Isotope( '.grid', {
        itemSelector: '.element-item',
        masonry: {
            // use element for option
            columnWidth: '.element-item',
            itemSelector: '.element-item',
            transitionDuration: '0.5s',
            gutter: 8,
            horizontalOrder: true,
        }
    });

    let applyFilterFromLink = (linkObject) => {
        let filterValue = linkObject.dataset.filter;
        isotopeGrid.arrange({ filter: filterValue });
    };

    let filterGrid = function( event ) {
        event.preventDefault();
        applyFilterFromLink(this);
        let activeBtn = document.querySelector('.ba-active-filter');
        if (activeBtn) {
            activeBtn.classList.remove('ba-active-filter');
        }
        this.classList.add('ba-active-filter');
    };

    document.querySelectorAll('.button').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });

    let activeBtn = document.querySelector('.ba-active-filter');
    applyFilterFromLink(activeBtn);
}
document.addEventListener('DOMContentLoaded', useIsotope);