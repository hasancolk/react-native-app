import axios from 'axios';

export const fetch_categories_api = (searchQuery) => {
    const fetch_all_categories_url = 'https://reqres.in/api/users?page=2';
    const fetch_categories_by_name_url = `https://reqres.in/api/users?page=2/first_name/${searchQuery}`;

    const url = searchQuery ? fetch_categories_by_name_url: fetch_all_categories_url;
    return axios.get(url);
}