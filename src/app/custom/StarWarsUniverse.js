import Entity from './Entity';

export default class StarWarsUniverse{
    constructor(){
        this.entitites = [];
    }
async init(){
    const valueArr = ["people", "planets", "films", "species", "vehicles", "starships"]
    const resposne = await fetch('https://swapi.booost.bg/api/');
    const data = await resposne.json();
    const arr = [];
    const finalarr = [];
    for(var i = 0;i<=5;i++){
        arr.push(data[valueArr[i]])
    }
    for(var i = 0;i<arr.length; i++){
        const finalArr = [];
        let resposne = await fetch(arr[i]);
        let data = await resposne.json();
        let tempArr = Object.values(await data.results);
        const entitie = new Entity(valueArr[i], tempArr);
        StarWarsUniverse.entities = finalarr
        finalarr.push(entitie);
    }
    this.entities = finalarr;
    return finalarr;
}
};

