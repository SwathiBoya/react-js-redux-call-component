
const reducer = (state = {}, action) => {

    switch (action.type) {
      case 'ADD_ITEM':
        return {say : 'I AM ADDED' };
      default:
        return state;
    }
    
  };
  
  export default reducer;