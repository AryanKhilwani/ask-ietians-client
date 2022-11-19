import { useState } from 'react';
import PostContext from './postContext'

const PostState = (props) => {

    const HOST = 'http://localhost:80/posts'
    const posts = []

    const [post, setPost] = useState(posts)

    // const [num, setNum] = useState(note.length)

    const fetchallposts = async () => {
        const response = await fetch(`${HOST}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsondata = await response.json()
        // console.log(jsondata);
        // objs.sort((a,b) => a.last_nom - b.last_nom);
        jsondata.sort((a,b)=> b.score - a.score)
        setPost(jsondata)
        return jsondata

    }
    const getPostById = async (id) => {
        const response = await fetch(`${HOST}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsondata = await response.json()
        return jsondata
    }



    // add
    const addPost = async (newPost) => {
        // setnote(notes.concat(note))

        const response = await fetch(`${HOST}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }, body: JSON.stringify(newPost)
        });
        console.log(response);

        // console.log(note)
    }
    const upvotePost = async (id) => {
        const response = await fetch(`${HOST}/like/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        });
        console.log(response);
    }
    const downvotePost = async (id) => {
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
        <PostContext.Provider value={{ post, fetchallposts, getPostById, addPost, upvotePost, downvotePost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;