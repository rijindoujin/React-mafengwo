import React from 'react';
import '../css/style.css';
import '../js/flexible';
import Main from '../components/main'
import '../fonts/iconfont.css'
// import '../js/swiper.min.js';
import Banner from '../components/banner'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    // let {data}=this.state
    axios.get('http://localhost:3000/mock/data.json').then((res)=>{
      console.log(res.data)
      
      this.setState({
          data:res.data.data.list
      })
    })
  }
  render() {
    let {data}=this.state
    return <div className="wrap">
                  <header className="header">头部</header>
                  <main className='main'>
                        <Banner/>
                        <Main data={data}/>
                  </main>
            </div>
  }
  
}

export default App;

