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
                <li > <a className='item-option' href="#">Inicio</a></li>
                <li > <a className='item-option' href="#projects">Proyectos</a></li>
                <li > <a className='item-option' href="#estudios">Estudios</a></li>
                <li > <a className='item-option' href="#contacto">Contactame</a></li>
            </div>
        </div> 
      </nav>
    </>
  )
}

export default Navigation
