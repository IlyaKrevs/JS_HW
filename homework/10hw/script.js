const dataJSON = `[{
    "results": 
        {
            "id": 43,
            "name": "Big Morty",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/43.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/28"
            ]
        }
}]`;

const myJSON = JSON.parse(dataJSON);
console.log(myJSON);

myJSON.forEach(e => {

    const myNewDiv = document.querySelector('.content');

    const myInDiv = document.createElement('div');
    const myName = document.createElement('p');
    const myImg = document.createElement('img');
    const myStatus = document.createElement('p');
    const mySpecies = document.createElement('p');

    myName.textContent = e.results.name;
    myImg.src = e.results.image;
    myStatus.textContent = e.results.status;
    mySpecies.textContent = e.results.species;

    myInDiv.appendChild(myName);
    myInDiv.appendChild(myImg);
    myInDiv.appendChild(myStatus);
    myInDiv.appendChild(mySpecies);

    myInDiv.style.border = '2px solid red';


    myNewDiv.appendChild(myInDiv);
});