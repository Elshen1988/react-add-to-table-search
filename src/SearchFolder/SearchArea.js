import React from 'react'

export const SearchArea = (props) => {
    console.log(props.searcher.email);
  return (
    <div>{props.searcher.id?
        
         <div className='searchDiv'>
       <table>
        <thead>
          <tr>
            <th>id</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
          <tbody>
            <tr>
               <td>{props.searcher.id}</td>
            <td>{props.searcher.FullName}</td>
            <td>{props.searcher.Email}</td>
            <td>{props.searcher.Password}</td>
            </tr>
          </tbody>
        </table>
      </div>:null
        }
       
    </div>
  )
}
