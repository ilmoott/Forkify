import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){

        const key = "455a45cbee88efd00ed2b3ec019c80a3";
        const url = "https://www.food2fork.com/api/search";

        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        }catch(error){
            alert(error);
        }
        
    };
}

