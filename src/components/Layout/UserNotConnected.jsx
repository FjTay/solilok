import Logo from "./Logo";

function UserNotConnected() {
  return (
    <div className="not-connect">
        <div className='nav-bar'>
            <div className='close-btn'>
                <button className=''>
                </button>
            </div>
            <Logo />
        </div>
        <h3>Create an account</h3>
        <button className="signIn-btn">
            Sign In
        </button>
    </div>
  )
}

export default UserNotConnected;