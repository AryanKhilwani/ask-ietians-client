import { useState } from 'react';
import TagContext from './tagContext'

const TagState = (props) => {

    const HOST = '${process.env.APIURI}/tags'
    const tags = []

    const [tag, setTag] = useState(tags)

    // const [num, setNum] = useState(note.length)

    const fetchalltags = async () => {
        const response = await fetch(`${HOST}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsondata = await response.json()
        console.log(jsondata);
        setTag(jsondata)
        return jsondata


    }
    return (
        <TagContext.Provider value={{ tag, fetchalltags }}>
            {props.children}
        </TagContext.Provider>
    )
}

export default TagState;