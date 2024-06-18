import ChangeState from "./components/ChangeState";
import Counter from "./components/Counter";
import ListProduct from "./components/ListProduct";
import ListUser from "./components/ListUser";
import Profile from "./components/Profile";
import RandomNumber from "./components/RandomNumber";
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
    </div>
  );
}
