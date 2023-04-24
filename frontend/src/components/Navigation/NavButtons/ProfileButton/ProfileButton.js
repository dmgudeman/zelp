
import './ProfileButton.css'

const ProfileButton = (props) => {
    return (
        <>
         <button id="profile-button" onClick={()=> console.log('hithere')}><i className="fa-regular fa-user"></i></button>
        </>
    )
}

export default ProfileButton;