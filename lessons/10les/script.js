const dataJSON = `[
    {
        "ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
    },
    {
        "ability": {
            "name": "imposter",
            "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
    }
]`;

const myJSON = JSON.parse(dataJSON);
console.log(myJSON);

myJSON.forEach(e => {
    console.log(e.ability.url);
});


myJSON.forEach(e => {

    const myNewDiv = document.querySelector('.content');

    const myInDiv = document.createElement('div');
    const myNewTitle = document.createElement('h3');
    const myName = document.createElement('p');
    const myLink = document.createElement('a');
    const myStatus = document.createElement('p');
    const mySlot = document.createElement('p');

    myInDiv.style.border = '2px solid red';
    myInDiv.style.margin = '32px';
    myInDiv.style.padding = '10px';

    myNewTitle.textContent = e.ability;
    myName.textContent = e.ability.name;
    myLink.href = e.ability.url;
    myLink.textContent = e.ability.url;
    myStatus.textContent = e.is_hidden;
    mySlot.textContent = e.slot;

    myInDiv.appendChild(myNewTitle);
    myInDiv.appendChild(myName);
    myInDiv.appendChild(myLink);
    myInDiv.appendChild(myStatus);
    myInDiv.appendChild(mySlot);

    myNewDiv.appendChild(myInDiv);
});