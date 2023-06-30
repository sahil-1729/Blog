import { useState } from "react";
const Toggle = (prop) => {
    const [visible, setVisible] = useState(false)

    const showWhenClick = { display : visible ? '' : 'none'}
    const hideWhenClick = { display : visible ? 'none' : ''}
    
    const update = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <div style={showWhenClick}>
                {prop.children}
                <button onClick={update}>cancel</button>
            </div>
            <div style={hideWhenClick}>
                <button onClick={update}>create a blog</button>
            </div>
        </div>
    )
}
export default Toggle