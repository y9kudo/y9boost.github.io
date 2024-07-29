document.addEventListener('scroll', () => {
    const mainText = document.getElementById('main-text');
    if (window.scrollY > 0) {
        mainText.style.fontSize = '24px';
        mainText.style.position = 'fixed';
        mainText.style.top = '10px';
        mainText.style.right = '10px';
    } else {
        mainText.style.fontSize = '72px';
        mainText.style.position = 'static';
    }

    const getBoostedContainer = document.getElementById('get-boosted-container');
    if (window.scrollY > window.innerHeight / 2) {
        getBoostedContainer.classList.remove('hidden');
    }
});

document.getElementById('get-boosted-button').addEventListener('click', () => {
    document.getElementById('get-boosted-container').classList.add('hidden');
    document.getElementById('boost-form').classList.remove('hidden');
});

document.getElementById('boost-form').addEventListener('change', calculateTotal);

function calculateTotal() {
    const rank5x5 = document.getElementById('rank-5x5').value;
    const rank2x2 = document.getElementById('rank-2x2').value;

    const price5x5 = rank5x5 ? 15 : 0;
    const price2x2 = rank2x2 ? 10 : 0;

    const totalPrice = price5x5 + price2x2;
    document.getElementById('price').innerText = totalPrice;
}
