import { useSelector } from "react-redux";

export default function Profile() {
  const stateProfile: any = useSelector((state) => {
    return state;
  });
  console.log(stateProfile.reducerProfile[0].id);

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>id:{stateProfile.reducerProfile[0].id}</p>
      <p>Họ và Tên:{stateProfile.reducerProfile[0].name}</p>
      <p>Giới tính:{stateProfile.reducerProfile[0].gender}</p>
      <p>Ngày sinh:{stateProfile.reducerProfile[0].dateOfBirth}</p>
      <p>Địa chỉ:{stateProfile.reducerProfile[0].address}</p>
    </div>
  );
}
