const dataJSON = `[
    {
        "name": "Mango People T-Shirt",
        "text": 
            {
                "Price": "300$",
                "Color": "Red",
                "Size": "XL",
                "Quantity": 2
            }
    },
    {
        "name": "Ellery X MO CAPSULE",
        "text": 
            {
                "Price": "52$",
                "Color": "Black",
                "Size": "XL",
                "Quantity": 1
            }
    }
]`;

const myJSON = JSON.parse(dataJSON);
console.log(myJSON);

myJSON.forEach(e => {
    const product__block = document.createElement('div');
    product__block.classList.add('product__block123');

    const myImg = document.createElement('img');
    myImg.classList.add('myImg123');
    myImg.src = 'Rectangle 15 copy.svg';

    const product__description = document.createElement('div');
    product__description.classList.add('product__description123');

    const product__item = document.createElement('div');
    product__item.classList.add('product__item123');

    const product__title = document.createElement('p');
    product__title.classList.add('product__title123');
    product__title.textContent = e.name;

    const product__property = document.createElement('div');
    product__property.classList.add('product__property123');

    for (const key in e.text) {
        const myText = document.createElement('p');
        myText.classList.add('product__text123');
        if (key == "Price") {
            const mySpan = document.createElement('span');
            mySpan.classList.add('color_text123');
            myText.textContent = key + ": ";

            mySpan.textContent = e.text[key];
            myText.appendChild(mySpan);
        }
        else if (key == "Quantity") {
            myText.classList.add('myGap');
            const mySpan = document.createElement('span');
            mySpan.classList.add('quantity');
            myText.textContent = key + ": ";

            mySpan.textContent = e.text[key];
            myText.appendChild(mySpan);
        }
        else {
            myText.textContent = key + ': ' + e.text[key];
        }
        product__property.appendChild(myText);
    }


    const exit = document.createElement('img');
    exit.classList.add('exit');
    exit.src = 'Vector.svg';

    const mainBlock = document.querySelector('.cart_item_product');

    product__block.appendChild(myImg);
    product__block.appendChild(product__description);
    product__description.appendChild(product__item);
    product__item.appendChild(product__title);



    product__item.appendChild(product__property);

    product__description.appendChild(exit);

    mainBlock.appendChild(product__block);

});
