import { useState } from 'react';
import ReplyContext from './replyContext'

const ReplyState = (props) => {

    const HOST = `${process.env.REACT_APP_APIURI}/reply`
    const replies = []

    const [reply, setReply] = useState(replies)
    const [num, setNum] = useState(reply.length)
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
        setNum(jsondata.length)
        return jsondata


    }


    // add
    const addReply = async (newReply, id) => {
        // setnote(notes.concat(note))

        const response = await fetch(`${HOST}/create/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }, body: JSON.stringify({ comment: newReply })
        });
        const jsondata = await response.json()
        // setReply(reply.concat(jsondata))
        setNum(reply.length+1)
        console.log(reply);

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
        <ReplyContext.Provider value={{num, reply, fetchallreplies, addReply, upvoteReply, downvoteReply }}>
            {props.children}
        </ReplyContext.Provider>
    )
}

export default ReplyState;