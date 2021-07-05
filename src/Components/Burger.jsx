import React from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Burger = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])


    let burgerFood = food.filter(item => item.type === "Hamburguesas")

    return ( 
        <div>
            <ul>
                {
                burgerFood.map((item,i)=> (
                       <li key={i}> 
                        {<img src = {item.images} style={{height:200, width: 250}}/>}
                        <p>{item.name}</p>
                    </li>  
                ))
                }    

                       
                
            </ul>

        </div>
    )
}

export default Burger