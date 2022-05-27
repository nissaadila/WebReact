import axios from 'axios'
import React from 'react'
import './App.css'
import Footerr from './Footer'
import Navbar from './Navbarr'


class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          mencari: '',
          content: []
      }
  }
  Submittt = () =>{
      var myapikey = "e9635360f32493705c704643a251ca59"
      var travel = this.state.mencari
      axios.get(`http://api.mediastack.com/v1/news?access_key=${myapikey}&languages=en&keywords=${travel}`)
      .then(res => {
          this.setState({
              content: res.data.data
          })
      })

  }

  validasibutton = () =>{
      if(this.state.mencari.length < 3){
          alert(`Data search must be at least 3 character`)
             return false
      }
      else{
          this.Submittt();
      }
    
  }

submitdetail = (ns) =>{
    this.props.history.push({
        pathname:'/Detailnews', 
        state: { konten: ns }
    })
 }

 changevalue = (event) => {
     this.setState({mencari: event.target.value})
 }

  render() {
      return (
          <div>
              <Navbar />
              <input type="text" placeholder="Search News..." value={ this.state.mencari }
                  onChange={this.changevalue} />
              <button onClick={this.validasibutton}  type="submit" value="Search">Search</button>
                <div className="all_news">
               {
                    this.state.content.map(konten => (
                        <div key={konten.title} className="news">
                            <p className="news_title">Title: {konten.title}</p>
                            <p className="news_category">Category: {konten.category}</p>
                            <button onClick={() => this.submitdetail(konten)}>Details</button>
                        </div>
                       
                    ))
                }
               </div>
               <Footerr />
          </div>
      )
  }
  
}

export default App