import React from 'react'

export const Titles = () =>{

    return(
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => console.log(json))
    )
}