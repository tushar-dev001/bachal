import Heading from "../Heading/Heading";
import User from "../User/User";
import Btn from "../Button/Btn";
import "./FriendRequest.css";

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
