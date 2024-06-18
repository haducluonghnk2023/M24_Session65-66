// khởi tạo state
const initialCounter: number = 0;

// khởi tạo hàm reducerCount
 const reducerCounter = (state = initialCounter, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    default:
      return state;
  } 
};
export default reducerCounter;
