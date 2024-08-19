const carCollections = ["BMW","HONDA","VOLVO","FERARI"];

function saveCollectionstoLs() {{
    localStorage.setItem("carCollections",carCollections);
}}


function getAllCollections () {
    const carsFromLocalStorage = localStorage.getItem("carCollections");
    console.log(carsFromLocalStorage);
}

function addCollectionCars(){
    carCollections.push("TOYOTA");
    saveCollectionstoLs();
}

addCollectionCars();
getAllCollections();