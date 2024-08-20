import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Label, Input, Button } from "../../components";
import { UserContex } from "../../App";
import { stringData } from "../../data";
import { editUser } from "../../redux/reducer/UserList.reducer";

const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContex);
  const [name, setName] = useState(users[params.id - 1].name);
  const [age, setAge] = useState(users[params.id - 1].age);
  const [id, setId] = useState("");
  const dispatcher = useDispatch();

  useEffect(() => {
    let newId = params.id;
    setId(newId);
  }, [params.id]);

  function handleSubmit() {
    let newData = { name, age, id };
    dispatcher(editUser(newData));
    navigate("/");
  }
  return (
    <>
      <section className="w-full flex items-center justify-center mt-5">
        <form className="w-3/5 flex flex-col gap-3 items-center">
          <div className="w-4/5">
            <Label labelName={stringData.Name} />
            <Input
              value={name}
              placeholder={stringData.placeholderName}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="w-4/5">
            <Label labelName={stringData.Age} />
            <Input
              value={age}
              placeholder={stringData.placeholderAge}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="w-4/5">
            <Button
              className="bg-blue-500 w-full"
              handleClick={() => handleSubmit()}
              btnName={stringData.Update}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default EditUser;
