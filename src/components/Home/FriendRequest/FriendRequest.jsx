import Btn from "../../Shared/Button/Btn";
import Heading from "../../Shared/Heading/Heading";
import "./FriendRequest.css";
import User from "../../User/User";

const FriendRequest = () => {
  return (
    <div className="box">
      <h3 className="title">
        <Heading title="Friend Request" />
      </h3>

      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
      <div className="btn-btn">
        <User />
        <div className="button">
          <Btn title="Accept" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
