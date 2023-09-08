export const initialState = {
    basket: [],
    user: null
};

// selector for adding all whats in the basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket

            // return the initial state, then returning the basket to whatever
            // value it was plus whatever item just added
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // item in basket exists, splice removes it by 1
                newBasket.splice(index, 1)
            } else {
                console.warn('cant remove product');
            }
            return {
                ...state,
                basket: newBasket
            };


        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }


        default:
            return state;
    }
}


export default reducer