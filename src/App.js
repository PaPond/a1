import React from 'react'
import Banner from './banner'
import Button from './class-components' 
import {Calculator} from './calculator'
import {EventData,Table} from './event-data'



export default function App(){
  return (
  <> 
  <Banner/> 
  <p><center><Button/></center></p> 
  <Calculator/>
  <EventData/>
  <Table/>
  </>
  )
}
