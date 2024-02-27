function virykle(elementId, size = 4) {
    const DOM = document.getElementById(elementId);
    const HTML = `
        <div class="top">
            ${'<div class="skyle"></div>'.repeat(size)}
        </div>
        <div class="bottom">
            ${'<div class="jungiklis"></div>'.repeat(size)}
        </div>
    `;

    DOM.classList.add('virykle');
    DOM.innerHTML = HTML;

    const skylesDOM = DOM.querySelectorAll('.skyle');
    const jungikliaiDOM = DOM.querySelectorAll('.jungiklis');

    for (let i = 0; i < size; i++) {
        jungikliaiDOM[i].addEventListener('click', () => {
            jungikliaiDOM[i].classList.toggle('active');
            skylesDOM[i].classList.toggle('active');
        });
    }
}

virykle('virykle-1', 1);
virykle('virykle-2', 2);
virykle('virykle-3');
virykle('virykle-4', 9);