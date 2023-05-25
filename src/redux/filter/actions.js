
export const addFilter = (filter) => {
    return {
        type: "filter/addFilter",
        payload: filter,
    }
}

export const doFilter = (a, b) => {
    return {
        type: "filter/doFilter",
        payload: {
            a,
            b,
        }
    }
     
    
}