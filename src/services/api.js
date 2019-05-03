function getFetchAction(){

}
export function callAPI(){

}


export const apiMiddleware = store => next => action => {
    console.log(action);
    const index = action.index;
    const types = action.types;
    console.log(types);
    
    if(!types && action.type){
        return next(action);
    }

    if(!Array.isArray(types) || types.length !== 3){
        throw new Error('Expected an array of three action types.');
    }
    if(!types.every(type => typeof type === 'string')){
        throw new Error('Expected action types to be strings.');
    }
    const {requestType, successType, failureType} = types;
    next({
        index: index,
        type: requestType,
      });
};