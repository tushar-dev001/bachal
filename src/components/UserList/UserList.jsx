import { useEffect, useState } from "react";
import Btn from "../Shared/Button/Btn";
import Heading from "../Shared/Heading/Heading";
import User from "../User/User";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });

      setUserLists(arr);
    });
  }, []);


  return (
    <div className="box">
      <h3 className="title">
        <Heading title="User List" />
      </h3>

      {/* <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div> */}

      {userLists.map((user, index) => (
        <>
          <div className="userBtn">
            <div>
              <User key={index} name={user.username} email={user.email}></User>
            </div>
            <div className="button">
              <Btn key={user.index} title="Add" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserList;
