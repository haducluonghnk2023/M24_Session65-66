import { useDispatch, useSelector } from "react-redux";
import { actionCounter } from "../action/index";

export default function Count() {
  // để láy dữ liệu ở trong kho thì dùng useSelector
  const stateCounter: any = useSelector((state) => {
    return state;
  });
  //   console.log(stateCount.reducerCount);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>B4</h1>
      <p>giá trị count:{stateCounter.reducerCounter}</p>
      <button onClick={() => dispatch(actionCounter("INCREASE", 1))}>
        Tăng
      </button>
      <button onClick={() => dispatch(actionCounter("DECREASE", 1))}>
        Giảm
      </button>
    </div>
  );
}
