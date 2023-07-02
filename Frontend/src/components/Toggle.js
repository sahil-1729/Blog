import { useState, forwardRef, useImperativeHandle } from "react";
const Toggle = forwardRef((prop,refs) => {
    const [visible, setVisible] = useState(false)

    const showWhenClick = { display : visible ? '' : 'none'}
    const hideWhenClick = { display : visible ? 'none' : ''}
    
    const update = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs,() => {
        return {update}
    })

    return (
        <div>
            <div style={showWhenClick}>
                {prop.children}
                <button onClick={update}>{prop.buttonLabel1}</button>
            </div>
            <div style={hideWhenClick}>
                <button onClick={update}>{prop.buttonLabel2}</button>
            </div>
        </div>
    )
})
export default Toggle