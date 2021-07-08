import React from 'react'

const List = () => {

        const arrayFood = [
                {Hamburguesas : ['simple ', 'doble']},
                {Acompañamiento :['Papas fritas', 'Empanadas de queso']},
                {Bebidas :['Coca-cola', 'Pepsi', 'Cerveza']}
        ]

        const [food, setFood] = React.useState(arrayFood)


    return (
        <div>
            <h1>Pedidos</h1>
            <ul>
                {
                    food.map((item,index) => (
                        <li key = {index}>{item[0]}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
