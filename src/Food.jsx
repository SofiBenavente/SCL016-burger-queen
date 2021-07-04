import React from 'react'
import {Menu} from './Menu.json'
//let arrayMenu = require('./Menu.json');

const Food = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])

    return ( 
        <div>
            <ul>
                {
                food.map((item,i)=>(
                    <li key={i}> 
                        <p>{item.type}</p>
                        <p>{item.prices}</p>
                        <img src = {item.images} style={{height:70, width: 70}}/>
                    </li>
                    ))
                }               
                
            </ul>

        </div>
    )
}

export default Food
