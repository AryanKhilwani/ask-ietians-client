import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Posts from './Posts'
import Tags from './Tags'

const Dashboard = () => {
  const allposts = [{
    _id: '1',
    title: 'title',
    author: {
      name: 'author'
    },
    description: 'description',
    tag: [{_id:'2',name:'tag1'}],
    votes: 10,
    views: 100
  },
  {
    _id: '2',
    title: 'title',
    author: {
      name: 'author'
    },
    description: 'description',
    tag: [{_id:'2',name:'tag1'},{_id:'3',name:'tag2'}],
    votes: 10,
    views: 100
  },
  {
    _id: '3',
    title: 'title',
    author: {
      name: 'author'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam blanditiis quidem architecto perferendis vitae odio suscipit corrupti, error, nobis aperiam voluptate, delectus totam cupiditate eveniet repudiandae aspernatur sequi amet. Libero quod harum aspernatur incidunt, voluptatum, non enim nostrum cupiditate provident facilis assumenda recusandae alias voluptas sed in cumque, exercitationem ex eum neque sapiente deserunt ab dolor nulla beatae! Mollitia facilis illum asperiores quidem aliquam dicta dolores ab doloremque natus ratione illo, nisi quisquam minus autem optio fuga error nobis nihil repellat consequuntur quas sequi. Pariatur tenetur iure temporibus aspernatur laudantium. Sequi illum blanditiis maiores nam eligendi! Iure, eveniet sunt.',

    tag: [{_id:'3',name:'tag2'}],
    votes: 10,
    views: 100
  }]
  const [posts, setPosts] = useState(allposts)
  const getPosts = (selectedTag) => {
    setPosts(allposts)
    if(selectedTag.name==='All posts'){
      return
    }
    const filtered = [];
    for (let i in posts) {
      const post = posts[i];
      const { tag } = post;
      for (let j in tag) {
        console.log(tag[j].name,selectedTag.name,post)
        if (tag[j].name === selectedTag.name) {
          filtered.push(post);
          break;
        }
      }
    }
    console.log(posts,selectedTag,filtered)
    setPosts(filtered);
  }
  const tags = [{_id:'1',name:'All posts'},{_id:'2',name:'tag1'},{_id:'3',name:'tag2'}]

  

  
  return (
    <>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={10} >
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={2} sx={{ mt: 1 }}>
          <Tags tags={tags} getPosts={getPosts}/>

        </Grid>

      </Grid>
    </>
  )
}

export default Dashboard