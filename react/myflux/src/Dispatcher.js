const storeCallbackList = [];
export default {

    register(storeCallback){
        storeList.push(storeCallback);
    }

    dispatch(action){
        for (let callback of storeCallbackList){
            callback(action);
        }
    }
}
