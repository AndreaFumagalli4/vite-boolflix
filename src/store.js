import { reactive } from 'vue';

export const store = reactive({
    searchedQuery: '',
    moviesList: [],
    tvSeriesList: [],
})