document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for boosts
    const boosts = [
        { image: 'https://example.com/boost1.jpg', name: 'Boost 1', description: 'Описание буста 1' },
        { image: 'https://example.com/boost2.jpg', name: 'Boost 2', description: 'Описание буста 2' },
        { image: 'https://example.com/boost3.jpg', name: 'Boost 3', description: 'Описание буста 3' }
    ];

    const boostsContainer = document.getElementById('boosts-container');

    // Generate HTML for each boost
    boosts.forEach(boost => {
        const boostElement = document.createElement('div');
        boostElement.classList.add('boost');

        const imageElement = document.createElement('img');
        imageElement.src = boost.image;
        imageElement.alt = boost.name;

        const headingElement = document.createElement('h3');
        headingElement.textContent = boost.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = boost.description;

        boostElement.appendChild(imageElement);
        boostElement.appendChild(headingElement);
        boostElement.appendChild(descriptionElement);

        boostsContainer.appendChild(boostElement);
    });
});
