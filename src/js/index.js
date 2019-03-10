import axios from "axios";

const key = "455a45cbee88efd00ed2b3ec019c80a3";
const url = "https://www.food2fork.com/api/search";

async function getResults(query){

    try{
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    }catch(error){
        alert(error);
    }
    
};

getResults('pizza');