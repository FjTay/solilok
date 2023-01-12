import { useEffect, useState } from "react"


const ActionConfirmation = ({data}) => {

const [track, setStrack] = useState(data)

    useEffect(() => {
        alert("added !!")
    }, [data.length])

    return (
        <div>Hello</div>
    )
}

export default ActionConfirmation