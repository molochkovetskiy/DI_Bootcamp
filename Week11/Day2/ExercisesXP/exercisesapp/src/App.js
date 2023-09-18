import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Webhook from "./components/Webhook";
import './App.css';

const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile Screen</h1>;
const ShopScreen = () => {
  throw new Error();
};

function App() {
  return (
    // Exercise 1

    // <div className="container">
    //   <nav className="nav nav-pills">
    //     <NavLink className="nav-link" to="/">
    //       Home
    //     </NavLink>
    //     <NavLink className="nav-link" to="/profile">
    //       Profile
    //     </NavLink>
    //     <NavLink className="nav-link" to="/shop">
    //       Shop
    //     </NavLink>
    //   </nav>
    //   <ErrorBoundary>
    //     <Routes>
    //       <Route path="/" element={<HomeScreen />} />
    //       <Route path="/profile" element={<ProfileScreen />} />
    //       <Route path="/shop" element={<ShopScreen />} />
    //     </Routes>
    //   </ErrorBoundary>
    // </div>

    // Exercise 2
    // <>
    //   <PostList />
    // </>

    // Exercise 3
    // <>
    //   <Example1 />
    //   <Example2 />
    //   <Example3 />
    // </>

    // Exercise 4
    <>
      <Webhook />
    </>
  );
}

export default App;
