import './list-products.scss'

//images
import camera from './assets/images/camera.jpg'
import camera_lens from './assets/images/camera_lens.jpg'
import cologne from './assets/images/cologne.jpg'
import cream_set from './assets/images/cream_set.jpg'
import digital_set from './assets/images/digital_set.jpg'
import guitar_nail from './assets/images/guitar_nail.jpg'
import lipstick from './assets/images/lipstick.jpg'
import lotion from './assets/images/lotion.jpg'
import projector from './assets/images/projector.jpg'
import parfume from './assets/images/parfume.jpg'
import sharpener from './assets/images/sharpener.jpg'
import smartwatch from './assets/images/smartwatch.jpg'

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');

    const products = [
        {
            name: 'Camera',
            description: 'Example of a camera',
            image: camera
        },
        {
            name: 'Camera Lens',
            description: 'Example of a camera lens',
            image: camera_lens
        },
        {
            name: 'Cologne',
            description: 'Example of a cologne',
            image: cologne
        },
        {
            name: 'Cream Set',
            description: 'Example of a cream set',
            image: cream_set
        },
        {
            name: 'Digital Set',
            description: 'Example of a digital set',
            image: digital_set
        },
        {
            name: 'Guitar Nail',
            description: 'Example of a guitar nail',
            image: guitar_nail
        },
        {
            name: 'Lipstick',
            description: 'Example of a lipstick',
            image: lipstick
        },
        {
            name: 'Lotion',
            description: 'Example of a lotion',
            image: lotion
        },
        {
            name: 'Projector',
            description: 'Example of a projector',
            image: projector
        },
        {
            name: 'Parfume',
            description: 'Example of a parfume',
            image: parfume
        },
        {
            name: 'Sharpener',
            description: 'Example of a sharpener',
            image: sharpener
        },
        {
            name: 'Smartwatch',
            description: 'Example of a smartwatch',
            image: smartwatch
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '18rem';


        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.style.maxWidth = '100%';
        img.style.maxHeight = '180px';
        img.style.objectFit = 'cover';
        img.src = product.image;
        img.alt = product.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p')
        description.classList.add('card-text');
        description.textContent = product.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });


});