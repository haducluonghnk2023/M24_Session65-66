const initialState = {
    company: "Rikkei Academy"
  };
  
  const CHANGE_COMPANY = 'CHANGE_COMPANY';
  
  export const changeCompany = () => {
    return {
      type: CHANGE_COMPANY,
      payload: "RikkeiSoft"
    };
  };
  
  export const companyReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case CHANGE_COMPANY:
        return { ...state, company: action.payload };
      default:
        return state;
    }
  };
  