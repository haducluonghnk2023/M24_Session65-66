const initialState = {
    theme: 'light' // Mặc định là chế độ sáng
  };
  
  const TOGGLE_THEME = 'TOGGLE_THEME';
  
  export const toggleTheme = () => {
    return {
      type: TOGGLE_THEME
    };
  };
  
  export const themeReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case TOGGLE_THEME:
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light'
        };
      default:
        return state;
    }
  };
  