import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber } from "../store/reducers/randomNumber";

const RandomNumber = () => {
  const dispatch = useDispatch();
  const randomNumbers: any = useSelector((state) => state);

  console.log(randomNumbers.randomNumberReducer);

  const handleClick = () => {
    dispatch(addRandomNumber());
  };

  return (
    <div>
      <h1>B5</h1>
      <button onClick={handleClick}>Generate Random Number</button>
      <ul>
        {randomNumbers.randomNumberReducer.map((num: number, index: number) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNumber;
