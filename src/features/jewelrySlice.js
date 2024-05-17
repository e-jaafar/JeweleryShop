import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json"

export const jewelrySlice = createSlice({
    name: "jewelrySlice",
    initialState: {
        data,
        tabCart: [],
        totalCart: 0
    },
    reducers: {
        addCart(state, action) {
            const itemToAdd = state.data.find(element => element.id === action.payload);
            // Il rajoute à chaque fois (mais je rajoute ma cond.)
            // state.tabCart.push(itemToAdd);

            // Vérifie si le produit est déjà présent dans le panier
            const existingItem = state.tabCart.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                // Si oui, incrémente la quantité
                existingItem.quantity++;
            } else {
                // Si non, ajoute le produit avec une quantité de 1 (au début ici)
                itemToAdd.quantity = 1;
                state.tabCart.push(itemToAdd);
            }

            state.totalCart += itemToAdd.price
        },
        deleteCart(state, action) {
            const itemToRemove = state.data.find(element => element.id === action.payload);
            const existingItem = state.tabCart.find(item => item.id === itemToRemove.id);
            if (existingItem) {
                existingItem.quantity--;
                if(existingItem.quantity === 0){
                    const index = state.tabCart.indexOf(existingItem);
                    state.tabCart.splice(index, 1);
                }
                // verif total du panier
                if(state.totalCart >= itemToRemove.price){
                    state.totalCart -= itemToRemove.price;
                } else {
                    // reset si toal < 0
                    state.totalCart = 0;
                }
            }
        }
        ,
        checkout(state) {
            state.tabCart = []
            state.totalCart = 0
        }
    }
})

export const { addCart, checkout, deleteCart } = jewelrySlice.actions
export default jewelrySlice.reducer 