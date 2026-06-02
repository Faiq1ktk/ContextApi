import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
        <div className="app-content">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;