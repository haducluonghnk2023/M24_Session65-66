const initialProfile = [
    {
        id:1,
        name:"Nguyễn Văn Nam",
        gender:"male",
        dateOfBirth:"20/03/2024",
        address:"Thanh Xuân, Hà Nội"
    }
]
const reducerProfile = (state=initialProfile,action:any)=> {
    switch (action.type) {
        case "":
           return state
        default:
         return state
    }
}
export default reducerProfile;