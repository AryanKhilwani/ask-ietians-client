import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PostContext from '../context/post/postContext'
import tagContext from '../context/tag/tagContext'
import Posts from './Posts'
import Tags from './Tags'

const Dashboard = () => {
  const postcontext = useContext(PostContext)
  const { post, fetchallposts } = postcontext

  const tagcontext = useContext(tagContext)
  const { tag, fetchalltags } = tagcontext

  let allposts = []

  const [posts, setPosts] = useState([])

  const fetchdata = async () => {
    allposts = await fetchallposts();
    setPosts(allposts)
  }

  useEffect(() => {
    fetchdata()

    fetchalltags();
  }, [])

  const getPosts = (selectedTag) => {
    setPosts(post)
    if (selectedTag.name === 'All posts') {
      return
    }
    const filtered = [];
    for (let i in post) {
      const wantedPost = post[i];
      const { tags } = wantedPost;
      for (let j in tags) {
        if (tags[j].name === selectedTag.name) {
          filtered.push(wantedPost);
          break;
        }
      }
    }
    setPosts(filtered);
  }
  // const tags = [{_id:'1',name:'All posts'},{_id:'2',name:'tag1'},{_id:'3',name:'tag2'}]
  const tags = [
    { _id: '1', name: 'All posts' },
    ...tag]




  return (
    <>
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={10} >
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={2} sx={{ mt: 1 }}>
          <Tags tags={tags} getPosts={getPosts} />

        </Grid>

      </Grid>
    </>
  )
}

export default Dashboard