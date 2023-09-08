import React from 'react'
import Banner from './banner'
import Button from './class-components' 
import {Calculator} from './calculator'
import {EventData} from './event-data'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import MassageBox from './state-func'
import { userContext } from './context'
import  Header2  from './context-header2'
import  Content2  from './context-content2'

export default function App(){
  let [user,setUser] = React.useState()
  return (
  <> 
  <userContext.Provider value={[user,setUser]}>
    <Header2/><Content2/>
  </userContext.Provider>
  <Banner/> 
  <p><center><Button/></center></p> 
  <Calculator/>
  <RefsFunc/>
  <MassageBox/>
  <RefsArray/>
  <EventData/>
  </>
  )
}
