import React from 'react'

const Food = () => {

    const [food, setFood] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('./Menu.json')
        const foodList = await data.json()
        console.log(foodList)
        setFood(foodList)
    }

    return (
        <div>
            <h1>hamburguesitas</h1>
            <ul>
                {
                    food.map(item => (
                        <li key={item.id}>
                            {item.arrayMenu}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Food
