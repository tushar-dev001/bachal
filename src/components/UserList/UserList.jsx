import Heading from "../Heading/Heading";
import User from "../User/User";
import Btn from "../Button/Btn";

const UserList = () => {
  return (
    <div className="box">
    <h3 className="title">
      <Heading title="User List" />
    </h3>

    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>
    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>
    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>
    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>
    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>
    <div className="btn-btn">
      <User />
      <div className="button">
        <Btn title="Add" />
      </div>
    </div>

  </div>
  )
}

export default UserList