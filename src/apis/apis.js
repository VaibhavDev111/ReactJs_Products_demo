import { constants } from "../constants/constants";
import { endpoints } from "../constants/endpoints";

export async function getProducts(){
    const response = await fetch(constants.base_url+endpoints.products);
    const data = await response.json();
    return data
}

export async function getProductDetails(id){
    const response = await fetch(constants.base_url+endpoints.products+"/"+id);
    const data = await response.json();
    return data
}