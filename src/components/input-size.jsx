import React, {useState} from "react";

const InputSize = () =>{
    // const [size, setSize] = useState(undefined)
    const [sizeCount, setSizeCount] = useState("")

    const targetDispatch = (val) =>{
        setSizeCount(val)
        console.log("dipatching")
    }
    

    return <input type="text" placeholder="0" 
                    value={sizeCount}
                    onChange={e=>targetDispatch(e.target.value)}
                    className="contain-preview-checkbox-input-number"/>
}

export default InputSize