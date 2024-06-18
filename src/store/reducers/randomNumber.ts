const initialRandomNumber:any[] = [];



export const addRandomNumber = () => {
  return {
    type: "ADD",
    payload: Math.floor(Math.random() * 100) + 1
  };
};

export const randomNumberReducer = (state = initialRandomNumber, action:any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
