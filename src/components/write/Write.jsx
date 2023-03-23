import React from 'react'
import './write.css'

const imgWrite= require('../../assets/post.jpg')
const Write = () => {
  return (
    <div className='write'>
        <img src={imgWrite} alt="" className="writeImg" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" name="" id="fileInput"style={{display:'none'}}/>
                <input type="text" name="" placeholder='title' id="" className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea name="" id="" cols="30" rows="10" 
                placeholder='tell your story' 
                type='text' 
                className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>


    </div>
  )
}

export default Write