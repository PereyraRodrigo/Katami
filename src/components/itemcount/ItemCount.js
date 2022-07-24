import { useState } from "react"

export const ItemCount = ({stock,initial}) => {
    const [counter, setCounter] = useState(initial)
    
    const increase = () => {
        if (counter < stock) {
            setCounter(counter + 1)            
        }
    }
    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const onAdd = () => {
        if (stock > 0) {
            alert(`You've added ${counter} items`)
        }
        else {
            alert('There is no stock for this product')
        }
    }
    return (
        <>
            <button onClick={decrease} >-</button>
            <p>{counter}</p>
            <button onClick={increase} >+</button>
            <button onClick={onAdd} >Agregar</button>
        </>
    )
}