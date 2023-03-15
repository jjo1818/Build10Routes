import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
            {props.classes.map((item, index) => 
                    <a href={`/classes/${index}`}><li>{item.name} </li></a>
                )}
            </ul>
        </div>
    )
}

export default Index