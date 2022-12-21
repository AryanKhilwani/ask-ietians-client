import { Card, CardContent, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PostContext from '../context/post/postContext'
import tagContext from '../context/tag/tagContext'
import CreateBar from './CreateBar'
import Posts from './Posts'
import SortBar from './SortBar'
import Tags from './Tags'

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const Dashboard = () => {
  const postcontext = useContext(PostContext)
  const { post, fetchallposts } = postcontext

  const tagcontext = useContext(tagContext)
  const { tag, fetchalltags } = tagcontext

  const [posts, setPosts] = useState([])

  const [loading, setLoading] = useState(false)

  let allposts = []

  const fetchdata = async () => {
    allposts = await fetchallposts();
    setPosts(allposts)
    
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchdata()
    fetchalltags();
    // eslint-disable-next-line 
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

  const handleHot = async () => {
    setPosts([])
    setLoading(true)
    let hot = posts
    await hot.sort((a, b) => b.score - a.score)
    setPosts(hot)
    setLoading(false)
    console.log(posts)
  }
  const handleNew = async () => {
    setPosts([])
    setLoading(true)
    console.log(posts)
    let newPosts = posts
    await newPosts.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    setPosts(newPosts)
    setLoading(false)
    console.log(posts)

  }



  return (
    <>
      <Grid container sx={{ mt: 10 }} spacing={1}>
        <Grid item xs={9}>
          <CreateBar />
          <SortBar hot={handleHot} new={handleNew} />
          {!loading ?
            <Posts posts={posts} />
            : (
              <Stack spacing={1} sx={{ m: 1 }}>
                <Card>
                <Skeleton  sx={{ bgcolor: 'white' }} variant="rounded" height={200}  animation="wave"/>
              
                </Card>
                <Card>
                <Skeleton  sx={{ bgcolor: 'white' }} variant="rounded" height={400}  animation="wave"/>
              
                </Card>
              </Stack>
            )
          }
        </Grid>
        <Grid item xs={3} sx={{ mt: 1 }}>
          <Tags tags={tags} getPosts={getPosts} />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard