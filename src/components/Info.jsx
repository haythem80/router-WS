import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Info = ({list}) => {
    // console.log(list)
    const {id}=useParams()
    // console.log(id)
    const item=list.find(el=>el.id==id)
  return (
    <div>
<img src={item.image} alt={item.name} style={{width:"30%"}} />
<h3>{item.price}</h3>
    </div>
  )
}

export default Info