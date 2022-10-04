import { useState } from 'react';
import ReplyContext from './replyContext'

const ReplyState = (props) => {

    const HOST = 'http://localhost:80/reply'
    const replies = []

    const [reply, setReply] = useState(replies)

    // const [num, setNum] = useState(note.length)

    const fetchallreplies = async (id) => {
        const response = await fetch(`${HOST}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsondata = await response.json()
        // const data = await jsondata;
        console.log(jsondata);
        setReply(jsondata)
        return jsondata


    }


    // add
    const addReply = async (newReply,id) => {
        // setnote(notes.concat(note))

        const response = await fetch(`${HOST}/create/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }, body: JSON.stringify(newReply)
        });
        console.log(response);

        // console.log(note)
    }
    const upvoteReply = async (id) => {
        const response = await fetch(`${HOST}/like/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        });
        console.log(response);
    }
    const downvoteReply = async (id) => {
        const response = await fetch(`${HOST}/dislike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        });
        console.log(response);
    }

    return (
        <ReplyContext.Provider value={{reply, fetchallreplies, addReply, upvoteReply,downvoteReply}}>
            {props.children}
        </ReplyContext.Provider>
    )
}

export default ReplyState;