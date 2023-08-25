import React from 'react'
import Banner from './banner'
import Button from './class-components' 
import {Calculator} from './calculator'
import {EventData} from './event-data'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import MassageBox from './state-func'

export default function App(){
  return (
  <> 
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
