import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Pencil, Trash } from "lucide-react";

import Button from "../button/Button";
import { UserContex } from "../../App";
import { stringData } from "../../data";
import { deleteUser } from "../../redux/reducer/UserList.reducer";

const Table = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserContex);
  const dispatcher = useDispatch();

  function handleDelete(data) {
    if (data) {
      dispatcher(deleteUser(data));
    }
  }

  function handleEdit(id) {
    navigate(`/editUser/${id}`);
  }
  return (
    <>
      <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
        <table className="w-3/5 text-center border-2 border-zinc-800 rounded-lg">
          <thead>
            <tr>
              <th className="border border-zinc-400 p-3">{stringData.No}</th>
              <th className="border border-zinc-400">{stringData.Name}</th>
              <th className="border border-zinc-400">{stringData.Age}</th>
              <th className="border border-zinc-400">{stringData.Update}</th>
              <th className="border border-zinc-400">{stringData.Delete}</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => {
              return (
                <tr key={i}>
                  <td className="border border-zinc-400  p-3">{i + 1}</td>
                  <td className="border border-zinc-400  p-3 capitalize">
                    {user.name}
                  </td>
                  <td className="border border-zinc-400  p-3">{user.age}</td>
                  <td className="border border-zinc-400 p-3">
                    <Button
                      className="bg-blue-500  w-4/5 "
                      icon={<Pencil />}
                      btnName={stringData.editBtn}
                      handleClick={() => {
                        handleEdit(user.id);
                      }}
                    />
                  </td>
                  <td className="border border-zinc-400  p-3">
                    <Button
                      className="bg-red-500  w-4/5"
                      icon={<Trash />}
                      btnName={stringData.deleteBtn}
                      handleClick={() => {
                        handleDelete(user);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button
          className="bg-green-500 w-3/5"
          btnName={stringData.createBtn}
          handleClick={() => {
            navigate("/addUser");
          }}
        />
      </div>
    </>
  );
};

export default Table;
