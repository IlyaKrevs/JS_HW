const dataJSON = `[
    {
        "item":
        {
            "photoLink": "img/1pic.svg",
            "photoAlt": "1pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    },
    {
        "item":
        {
            "photoLink": "img/2pic.svg",
            "photoAlt": "2pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    },
    {
        "item":
        {
            "photoLink": "img/3pic.svg",
            "photoAlt": "3pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    },
    {
        "item":
        {
            "photoLink": "img/4pic.svg",
            "photoAlt": "4pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    },
    {
        "item":
        {
            "photoLink": "img/5pic.svg",
            "photoAlt": "5pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    },
    {
        "item":
        {
            "photoLink": "img/6pic.svg",
            "photoAlt": "6pic",
            "title": "ELLERY X M'O CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    }
]`;

const myJSON = JSON.parse(dataJSON);
console.log(myJSON);

myJSON.forEach(e => {

    const content__products = document.querySelector('.content__products');

    

    const product__item = document.createElement('div');
    product__item.classList.add('product__item');

    const backgroundphoto = document.createElement('div');
    backgroundphoto.classList.add('backgroundphoto');

    const myIMG = document.createElement('img');
    myIMG.src = e.item.photoLink;
    myIMG.alt = e.item.photoAlt;

    backgroundphoto.appendChild(myIMG);


    const front_item = document.createElement('div');
    front_item.classList.add('front_item');



    const product__item_cell = document.createElement('div');
    product__item_cell.classList.add('product__item_cell');

    const cell__title = document.createElement('p');
    cell__title.classList.add('cell__title');
    cell__title.textContent = e.item.title;


    const cell__text = document.createElement('p');
    cell__text.classList.add('cell__text');
    cell__text.textContent = e.item.description;


    const cell__price = document.createElement('p');
    cell__price.classList.add('cell__price');
    cell__price.textContent = e.item.price;

    product__item_cell.appendChild(cell__title);
    product__item_cell.appendChild(cell__text);
    product__item_cell.appendChild(cell__price);



    product__item.appendChild(backgroundphoto);
    product__item.appendChild(front_item);
    product__item.appendChild(product__item_cell);

    content__products.appendChild(product__item);
});