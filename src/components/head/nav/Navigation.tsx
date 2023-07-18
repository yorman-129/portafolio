import './Navigation.css'

function Navigation() {

 
  return (
    <>
      <nav className='nav-container'>
        <div className='logo-container'>
            <div className='logo'>{"{Y3TDEV}"}</div>
        </div>
        <div className='options-container'>
            <div className="options">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Experiencia</a>
                <a href="#">Contact me</a>
            </div>
        </div> 
      </nav>
    </>
  )
}

export default Navigation
