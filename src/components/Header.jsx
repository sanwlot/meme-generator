import '../styles/Header.css'
import trollFace from '../assets/trollFace.png'

export default function Header() {
  return(
    <>
      <header>
        <div className="header-left-section">
          <img className='troll-face-img' src={trollFace} alt="troll face" />
          <div className='title'>MemeGenerator</div>
        </div>
      </header>
    </>
  )
}