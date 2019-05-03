export const apiMiddleware = store => next => action => {
    return next(action);
}