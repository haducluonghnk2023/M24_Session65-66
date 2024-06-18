import { useSelector } from "react-redux";

export default function ListProduct() {
  const stateListProduct: any = useSelector((state) => {
    return state;
  });
  //   console.log(stateListProduct.reducerProduct);

  return (
    <div>
      <h1>B3</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateListProduct.reducerProduct.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.rice}</td>
                <td>{item.number}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
