const initialUser = [
    {
        id:1,
        name:"Nguyễn Văn A",
        gender:"male",
        dateOfBirth:"20/03/2024",
        address:"Thanh Xuân, Hà Nội"
    },
    {
        id:2,
        name:"Nguyễn Văn B",
        gender:"male",
        dateOfBirth:"20/03/2024",
        address:"Thanh Xuân, Hà Nội"
    }
]
const reducerUser = (state=initialUser,action:any)=> {
    switch (action.type) {
        case "":
           return state
        default:
         return state
    }
}
export default reducerUser;