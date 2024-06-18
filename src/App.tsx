import ChangeState from "./components/ChangeState";
import Counter from "./components/Counter";
import ListProduct from "./components/ListProduct";
import ListUser from "./components/ListUser";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RandomNumber from "./components/RandomNumber";
import Register from "./components/Register";
import ThemeToggle from "./components/ThemToggle";

export default function App() {
  return (
    <div>
      <Profile></Profile>
      <ListUser></ListUser>
      <ListProduct></ListProduct>
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <ThemeToggle></ThemeToggle>
      <Register></Register>
      <Login></Login>
    </div>
  );
}
