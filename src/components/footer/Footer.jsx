import './Footer.css'
const logo = <img width="55" height="55" src="https://img.icons8.com/ios/100/meditation-guru.png" alt="meditation-guru"/>

export const Footer = () => {
  return (
    <>
    <div className="container-footer">
        <footer className='pie'>
            <ul>
                <li className='address'> Cipolletti </li>
                <li className='logo'>{logo}</li>
                <li className='contact'> yogaclass@gmail.com</li>
            </ul>
        </footer>
    </div>
    </>
  )
}

