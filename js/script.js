const change = () => {
    const table = document.querySelector('.prod-main-content__table');
    const link = document.querySelector('span.open-table > a');
    const isHidden = table.classList.contains('hidden');
    
    if (isHidden) {
        table.style.display = 'block';
        link.textContent = "Скрыть таблицу продукции ↑";
        
        setTimeout(() => {
            table.classList.remove('hidden');
            table.style.opacity = '1';
            table.style.transform = 'translateY(0)';
        }, 10);
    } else {
        table.style.opacity = '0';
        table.style.transform = 'translateY(-10px)';
        link.textContent = "Развернуть таблицу продукции ↓";
        
        setTimeout(() => {
            table.classList.add('hidden');
            table.style.display = 'none';
        }, 300);
    }
};


const hamOn = document.querySelector('.bottom-wrapper__content__bottom-bar__tablet');

const hamOff = document.querySelector('.close');

const hamburger = document.querySelector('.hamburger');

hamOn.addEventListener('click', () => {
    hamburger.style.zIndex = '10';
    hamburger.style.opacity = '1';
    hamburger.style.width = '100vw';
})

hamOff.addEventListener('click', () => {
    hamburger.style.zIndex = "-1";
    hamburger.style.opacity = '0';
    hamburger.style.width = '0';
})