export const initalState = {
    basket:[],
    user:null
};
//Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],

            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((item)=> item.id===action.id);
            let newBakset = [...state.basket];
            if (index>=0){
                newBakset.splice(index,1);

            }else{
                console.warn("No id Found");
            }
            return  {
                ...state,
                basket:newBakset
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }    
        default:
            return state;    
    }
}
export default reducer;