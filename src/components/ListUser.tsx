import { useSelector } from "react-redux";

export default function ListUser() {
  const stateListUser: any = useSelector((state) => {
    return state;
  });
  //   console.log(stateListUser.reducerUser);

  return (
    <div>
      <h1>B2</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính </th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateListUser.reducerUser.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.address}</td>
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
