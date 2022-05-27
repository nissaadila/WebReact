import React from 'react'
import Footerr from './Footer'
import Navbar from './Navbarr'

class Detailnews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.location.state.konten.title,
            description: this.props.location.state.konten.description,
            author: this.props.location.state.konten.author,
            image: this.props.location.state.konten.image,
            source: this.props.location.state.konten.source,
            url: this.props.location.state.konten.url,
            category: this.props.location.state.konten.category,
            published_at: this.props.location.state.konten.published_at

        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                    <div className="detailll">
                        <li className="tle">Tittle : {this.state.title}</li>
                        <li className="aut">Author : {this.state.author}</li>
                        <li className="ca">Category : {this.state.category}</li>
                        <a href={this.state.url}>{this.state.url}</a>
                        <li className="sou">Source : {this.state.source}</li>
                        <li className="pub">Published : {this.state.published_at}</li>
                        <li className="desc">Description : {this.state.description}</li>
                        <img src={this.state.image} alt="Foto not exists"/>
                    </div>

               <Footerr/>
            </div>
        )
    }
  }
  
  export default Detailnews