import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

//global state of the app
/*
- Search object
- Current recipe
- Shopping list
- Liked recipes
 */
const state = {};

const controlSearch = async ()=>{
    //1. Get the query from the view
    const query = searchView.getInput();

    if (query){
        //2. New Search Obj and add it to state
        state.search = new Search(query);

        //3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4. Search for recipes
        await state.search.getResults();

        //5. render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    controlSearch();
})

