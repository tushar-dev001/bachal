import User from "../../User/User";
import Btn from "../../Shared/Button/Btn";
import Heading from "../../Shared/Heading/Heading";

const BlockedUsers = () => {
  return (
    <div className="box">
      <h3 className="title">
        <Heading title="Blocked Users" />
      </h3>

      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Unblock" />
        </div>
      </div>
    </div>
  );
};

export default BlockedUsers;
