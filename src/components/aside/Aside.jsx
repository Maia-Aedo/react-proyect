import './Aside.css'
import salon from '../../assets/yoga_studio1.jpg'
import recepcion from '../../assets/yoga_studio3.jpg'
import armario from '../../assets/yoga_studio2.jpg'
import clases from '../../assets/yoga_studio4.jpg'

export const Aside = () => {
  return (
    <>
    <div className="container-aside">
        <h2 className='title-aside'>Nuestro local</h2>
        <img className="studio" src={recepcion} alt="" width={180} height={170}/>
        <img className="studio" src={salon} alt="" width={180} height={170}/>
        <img className="studio" src={armario} alt="" width={180} height={180}/>
        <img className="studio" src={clases} alt="" width={180} height={180}/>
    </div>
    </>
  )
}

