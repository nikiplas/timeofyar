document.addEventListener('DOMContentLoaded', function () {
    const watchGallery = document.getElementById('watchGallery');

    const watches = [
        {
            name: 'Casio G-Shock',
            description: 'Стильные и надежные часы для активного образа жизни.',
            image: 'img/watches/casio1.jpeg',
            price: '150$'
        },
        {
            name: 'Rolex Submariner',
            description: 'Икона стиля и роскоши - часы для настоящих ценителей.',
            image: 'img/watches/Rolex.jpeg',
            price: '3 000$'
        },
        {
            name: 'Tag Heuer Carrera',
            description: 'Современный дизайн и высочайшее качество в каждой детали.',
            image: 'img/watches/TagHeuer.jpeg',
            price: '3 200$'
        },
        {
            name: 'Omega Speedmaster',
            description: 'Легендарные часы, сопровождающие вас в каждом приключении.',
            image: 'img/watches/Omega.jpeg',
            price: '9 500$'
        },
        {
            name: 'Panerai Luna Rossa Luminor Due',
            description: 'Чистый хит, такой же белый, как гребень волны, когда парусная яхта рассекает воду.',
            image: 'img/watches/Panerai.jpg',
            price: '400$'
        },
        {
            name: 'Hublot Spirit Of Big Bang Essential Grey',
            description: 'Такие слова, как "дерзкий", идеально подходят под описание данных часов.',
            image: 'img/watches/Hublot.jpg',
            price: '21 000$'
        },
        {
            name: 'Bulova Classic',
            description: 'Всегда должен быть отведен уголок для часов в стиле ар-деко, таких как эти часы от Bulova.',
            image: 'img/watches/Bulova.jpg',
            price: '500$'
        },
        {
            name: 'Nixon Spectra',
            description: 'Уникальный внешний вид, не слишком формальный и определенно не повседневный.',
            image: 'img/watches/Nixon.jpg',
            price: '370$'
        },
    ];

    let currentIndex = 0;

    function displayWatches() {
        watchGallery.innerHTML = '';

        const startIndex = currentIndex;
        const endIndex = currentIndex + 3;

        for (let i = startIndex; i < endIndex; i++) {
            const watch = watches[i % watches.length];
            const watchItem = document.createElement('div');
            watchItem.className = 'watch-item';

            const watchImage = document.createElement('img');
            watchImage.src = watch.image;
            watchImage.alt = watch.name;

            const watchName = document.createElement('h3');
            watchName.textContent = watch.name;

            const watchDescription = document.createElement('p');
            watchDescription.textContent = watch.description;

            const watchPrice = document.createElement('p1');
            watchPrice.textContent = watch.price;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Купить';
            buyButton.className = 'buy-button';

            watchItem.appendChild(watchImage);
            watchItem.appendChild(watchName);
            watchItem.appendChild(watchDescription);
            watchItem.appendChild(watchPrice);
            watchItem.appendChild(buyButton);

            watchGallery.appendChild(watchItem);

            setTimeout(() => {
                watchItem.classList.add('show');
            }, 100); // Небольшая задержка для анимации
        }
    }

    displayWatches();

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + watches.length) % watches.length;
        displayWatches();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % watches.length;
        displayWatches();
    });
});

