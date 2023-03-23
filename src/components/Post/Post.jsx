import React from 'react'
import './post.css'

const imgPost= require('../../assets/post.jpg')

const Post = () => {
  return (
    <div className='post'>
        <img src={imgPost} className='postImg' alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Lefe</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span><hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, repudiandae. Explicabo iure quasi earum pariatur porro? Inventore, temporibus. Eius, in id. Commodi ad, quod quam incidunt accusamus dolores tenetur expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error laudantium ratione enim repudiandae ab architecto delectus eos minus suscipit odit perspiciatis, distinctio, blanditiis nobis dignissimos quidem vel laboriosam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde pariatur architecto atque accusantium dolor. Labore dolores animi ipsa. Rerum illum fugiat, mollitia accusamus veniam harum molestias distinctio culpa ipsum!</p>
    </div>
  )
}

export default Post