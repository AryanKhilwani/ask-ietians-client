import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import React, { useContext, useEffect, useState } from 'react'
import TagContext from '../context/tag/tagContext';


import PostContext from '../context/post/postContext'
import UserContext from '../context/user/userContext';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const CreatePost = () => {

  const Navigate = useNavigate()


  const tagContext = useContext(TagContext)
  const { tag, fetchalltags } = tagContext

  const context = useContext(UserContext)
  const { user } = context;

  const postcontext = useContext(PostContext)
  const { addPost } = postcontext


  const [post, setPost] = useState({ title: '', description: '' })
  const [tags, setTags] = useState([])

  
  // let error = false;
  const [error, setError] = useState(false)

  useEffect(() => {
    // fetchdata();
    fetchalltags();
    // console.log(tag)

  }, [])


  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })

  }

  const handleTagChange = (tagID) => {
    setError(false)
    const newtags = tags
    const index = newtags.indexOf(tagID);
    if (index === -1) newtags.push(tagID);
    else newtags.splice(index, 1);
    setTags(newtags)
    console.log(newtags);
  };

  const handleSubmit = async() => {
    const tagsArray = []
    tag.forEach(alltag => {
      tags.forEach(tagid => {
        if (alltag._id === tagid) {
          tagsArray.push(alltag)
        }
      });
    });
    if(tagsArray.length>0){
      setError(false)
      const goodpost = {title:post.title, description:post.description, tags:tagsArray}
      console.log(goodpost)
      const response = await addPost(goodpost)
      Navigate('/dashboard')

    }
    else{
      setError(true)
    }
  }

  return (<>
{
  user &&


    <Container sx={{ mt: 10 }} maxWidth='md'>


      <Paper
        sx={{
          p: 1,
        }} elevation={8}>
        <Container sx={{
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

          <Typography variant='h4' sx={{ mt: 1 }}>
            Create Post
          </Typography>
          <TextField sx={{ mt: 5 }} fullWidth id="outlined-basic" label="Title" variant="outlined" name='title' value={post.title} onChange={handleChange} />
          <TextField sx={{ mt: 3 }} fullWidth id="outlined-basic" multiline rows={5} label="Description" variant="outlined" name='description' value={post.description} onChange={handleChange} />

          <FormControl sx={{ mt: 5, ml: 4 }} fullWidth component="fieldset" variant="standard" error={error}
          >
            <FormLabel component="legend">Applicable Tags</FormLabel>
            <FormGroup sx={{ m: 1, display: 'flex', flexDirection: 'row' }} >
              {

                tag.map((tag) => {
                  return (
                    <FormControlLabel
                      key={tag._id}
                      control={
                        <Checkbox onChange={() => handleTagChange(tag._id)} name={tag.name} />
                      }
                      label={tag.name}
                    />
                  )
                })
              }

            </FormGroup>
            <FormHelperText disabled = {!error}>Check At Least One</FormHelperText>
          </FormControl>
          <Button variant='contained' sx={{ mt: 5, mb: 10 }} onClick={handleSubmit} >
            submit
          </Button>
        </Container>
      </Paper>
    </Container>
}
  </>
  )
}

export default CreatePost