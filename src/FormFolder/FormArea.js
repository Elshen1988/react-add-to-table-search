import React, { useState } from 'react'


export const FormArea = (props) => {
    let[password,setPassword]=useState()
   let[repeat,SetRepeat]=useState(false)
   let[repeatPassword,setRepeatPassword]=useState()
  return (
    <div>
          <div>
        <form >
          <input required placeholder='FullName:' ref={props.firstNameRef} onChange={(e) => props.setInputsValue({ ...props.inputsValue, FullName: e.target.value })}
            ></input><br></br>
          <input required type={'email'} placeholder='Email:' ref={props.LastNameRef} onChange={(e) => props.setInputsValue({ ...props.inputsValue, Email: e.target.value })}
            ></input><br></br>
          <input required type={'password'} placeholder='Password' ref={props.password} onChange={(e) => props.setInputsValue({ ...props.inputsValue, Password: e.target.value })&setPassword(e.target.value)}
            ></input><br></br>
            <input required type={'password'} ref={props.EmailRef}  placeholder='Repeat Password'  onChange={(e) =>setRepeatPassword(e.target.value)(e.target.value===password?SetRepeat(true):SetRepeat(false)) }
            ></input>{repeat?<img className='qqq' src='https://cdn-icons-png.flaticon.com/128/1828/1828644.png'alt='rtydyt'/>:null}<br></br>
          <button onClick={(e) =>repeatPassword===password? props.addUser(e)&SetRepeat(false):alert("Şifrə eyni deyil")}>Send</button><button onClick={(e) => props.search(e)}>Search</button>
        </form>
      </div>
    </div>
  )
}
