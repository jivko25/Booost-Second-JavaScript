// import Entities from './Entities';

class StarWarsUniverse{
    constructor(){
        this.entities = init();
        // this.test = test

        // this.init();
    }

}

export default class Entities{
    constructor(name, data){
        this.name = name;
        this.data = data;
    }
}

export async function init(){
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
        const entitie = new Entities(valueArr[i], tempArr);
        finalarr.push(entitie);
    }
    return finalarr;
}

// export async function fetchMoreData() {
//     const importArr = await init();
//     const arr = [];
//     for(var i = 0;i<importArr.length; i++){
//         const finalArr = [];
//         let resposne = await fetch(importArr[i]);
//         let data = await resposne.json();
//         let tempArr = Object.values(await data.results);
//         const entitie = new Entities(, tempArr);
//         arr.push(entitie);
//     }
//     return arr;
// }
