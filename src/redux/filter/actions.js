
export const addFilter = (filter) => {
    return {
        type: "filter/addFilter",
        payload: filter,
    }
}

export const doClear = () => {
    return {
        type: "filter/doClear",       
    }     
    
}