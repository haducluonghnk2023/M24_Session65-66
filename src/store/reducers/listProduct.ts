const initialProduct = [
  {
    id: 1,
    name: "cam sành",
    rice: 20.0,
    number: "10kg",
  },
  {
    id: 2,
    name: "buoi to",
    rice: 20.0,
    number: "5kg",
  },
];
const reducerProduct = (state = initialProduct, action: any) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};
export default reducerProduct;
