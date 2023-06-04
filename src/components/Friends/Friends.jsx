import Heading from '../Heading/Heading'
import User from "../User/User";
import './Friends.css'

const Friends = () => {
  return (
    <div className="box">
        <h3 className="title">
          <Heading title='Friends'/>
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

export default Friends