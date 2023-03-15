import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.class.name}</h1>
            <p>{props.class.teacher}</p>

            

            <a href="/classes">Back</a>
        </div>
    )
}

export default Show;
