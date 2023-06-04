
import g1 from '../../../public/g1.png'
import SubHeading from '../SubHeading/SubHeading';

const User = ({dateAndTime}) => {
  return (
    <div className="list">
        <div className="img">
            <img src={g1} alt="" />
        </div>
        <div className="details">
            {/* <h4 className='heading-name'>Friends Reunion</h4> */}
            {/* <p className='heading-title'>Hi Guys, Wassup!</p> */}

            <SubHeading name="Friends Reunion" subheading="Hi Guys, Wassup!"/>

        </div>
        <div className='dateAndTime'>{dateAndTime}</div>
        
    </div>
  )
}

export default User