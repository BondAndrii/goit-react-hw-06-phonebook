

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
     switch (action.type) {
         case "filter/addFilter":
             return action.payload;
         case "filter/doClear":
             return "";
        default: 
            return state;
    }
}