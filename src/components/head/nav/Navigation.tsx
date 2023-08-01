import './Navigation.css'

function Navigation() {

 
  return (
    <>
      <nav className='nav-container'>
        <div className='logo-container'>
            <div className='logoItem'>{"{Y3TDEV}"}</div>
        </div>
        <div className='options-container'>
            <div className="options">
                <li className='item-option' href="#">Home</li>
                <li className='item-option' href="#">Projects</li>
                <li className='item-option' href="#">Experiencia</li>
                <li className='item-option' href="#">Contact me</li>
            </div>
        </div> 
      </nav>
    </>
  )
}

export default Navigation
