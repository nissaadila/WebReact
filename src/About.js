import React from 'react'
import './App.css'
import Footerr from './Footer'
import Navbar from './Navbarr'

class About extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <p>Berita yang kami sajikan dipastikan tidak ada yang hoax </p>
                    <p>karena sebelum dipost kami research terlebih daluhu dari fakta yang ada</p>
                    <br />
                    <img src="no_hoax.jpg" alt="Foto no hoax"/>
                    <br /><br />
                <Footerr/>
            </div>
        )
    }
}

export default About