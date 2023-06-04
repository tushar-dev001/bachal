import Btn from '../Button/Btn';
import Heading from '../Heading/Heading'
import User from "../User/User";

const MyGroup = () => {
  return (
    <div className="box">
        <h3 className="title">
          <Heading title='My Group'/>
          <Btn title="Create Group" />
        </h3>
        <User dateAndTime="Today, 8:56pm"/>
        <User dateAndTime="Today, 8:56pm"/>
        <User dateAndTime="Today, 8:56pm"/>
        <User dateAndTime="Today, 8:56pm"/>
        <User dateAndTime="Today, 8:56pm"/>
        <User dateAndTime="Today, 8:56pm"/>
      </div>
  )
}

export default MyGroup