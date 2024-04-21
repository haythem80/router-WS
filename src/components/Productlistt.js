import React from 'react'
import Productcard from './Productcard'

const Productlistt = ({list}) => {
  return (
    <div className='cards'>
    {
        React.Children.toArray(list.map(el => <Productcard user={el}/>))
    }
    
    </div>
  )
}

export default Productlistt