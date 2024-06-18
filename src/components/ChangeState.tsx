import { useDispatch, useSelector } from "react-redux";
import { changeCompany } from "../store/reducers/companyReducer";

const ChangeState = () => {
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.companyReducer.company);
  //   console.log(company);

  const handleClick = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <h1>B6</h1>
      <button onClick={handleClick}>Change state</button>
      <p>{company}</p>
    </div>
  );
};

export default ChangeState;
