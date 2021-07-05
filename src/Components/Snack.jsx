import React from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Snack = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])


    let snackFood = food.filter(item => item.type === "Acompañamiento")
  

    return ( 
        <div>
            <ul>
                {
                snackFood.map((item,i)=> (
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

export default Snack