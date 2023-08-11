import React from 'react'
//import './style.css'
import {Header, Content, Footer} from './func-components'
import Calendar from './class-components'

function App() {
  return (
    <>
      <h2>hello world!</h2>
      <div className='title'>สวัสดีครับท่านสมาชิก</div>
    </>
  )
}
function App2() {
  return (
    
    [<Header/>,<Content/>,<Footer/>] 
    
  )
}
function App3() {
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/> 
    </>
  )
}
export default App3;
