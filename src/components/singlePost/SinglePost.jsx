import React from 'react'
import './singlePost.css'

const imgSinglePost = require('../../assets/post.jpg')
const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={imgSinglePost} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Autor: <b>Melissa Barrios</b> </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ratione dolor esse impedit fugit, reiciendis quaerat molestias voluptatum beatae nulla, ab tempora? Voluptatem maiores quia magni! Deleniti officiis delectus sint.
            Impedit adipisci facere ab. Temporibus id magnam unde repellat placeat. Illum delectus sunt est ut animi deleniti accusantium obcaecati dolore necessitatibus, consectetur enim, vel laudantium dolores aliquam incidunt quos natus?
            Dolores, molestias obcaecati. Labore nemo iusto dolor nostrum voluptates sed quae repudiandae laudantium, magnam aperiam veniam, dolore fugiat incidunt officia temporibus neque voluptatum quia, cumque laboriosam possimus! Vero, a deleniti.</p>
        </div>
    </div>
  )
}

export default SinglePost