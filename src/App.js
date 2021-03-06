import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./Store/user";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            id: authUser.uid,
            photo: authUser.photoURL,
            name: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user !== null ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
