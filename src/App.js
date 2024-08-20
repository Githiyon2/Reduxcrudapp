import { useState, useEffect, createContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import { Navbar } from "./components";
import Routers from "./components/route/Routers";

export const UserContex = createContext();

function App() {
  const { fetching = false, users = [] } = useSelector(
    (state) => state.usersList
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setUserId] = useState(0);
  const param = useParams();

  useEffect(() => {
    const ids = users.length + 1;
    setUserId(ids);
  }, [users]);

  return (
    <>
      <div>
        <Navbar />
        <UserContex.Provider
          value={{
            users,
            name,
            setName,
            age,
            setAge,
            id,
            param,
          }}
        >
          <Routes>
            {
              Routers.map((rout)=>{
                return   <Route path={rout.path} element={rout.element} />
              })
            }
          
          </Routes>
        </UserContex.Provider>
      </div>
    </>
  );
}

export default App;
