import {CategoryActionTypes as ActionTypes} from '../types/ActionTypes';

export const fetchCategories = (searchQuery = '') => ({
    type: ActionTypes.fetch_categories,
    searchQuery,
});

export const fetchCategoriesResult = (hasError, categories) => ({
    type: ActionTypes.fetch_categories_result,
    hasError,
    categories,
});

export const changeSearchQuery = (searchQuery) => ({

    type: ActionTypes.change_search_query,
    searchQuery,
});