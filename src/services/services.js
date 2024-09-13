import { keyServices }  from '../keys/keys'
import { api } from '../url/apis'
 
export const apiGetListItems = (searchArg, pageArg) => {

    var search = `keyword=${searchArg}&`
    var page = `page=${pageArg}&`
    var sortBy = 'sortBy=best_match'

    var parameters = `${search}${page}${sortBy}`

    const url = `${api}`;
    const key =  keyServices;

    return fetch(`${url}${parameters}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': key,
        }
    })
    .then(response => response.json())
    .then(data => {
        return data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
    })
        .catch(error => {
            console.log('error de servicio => ',error.message)
            throw error
        })
}