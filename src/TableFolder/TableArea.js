import React from 'react'


export const TableArea = (props) => {
  return (
    <div>
         <div className='firstInput'>
        <table>
          <thead>
            <tr>
              {Object.keys(props.obj[0]).map((item, index) => <th onClick={() => props.sortTd(item)} key={index}>{item}</th>)}
             <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.obj.map((user, index) => <tr key={index}>
              {Object.keys(user).map((item, index) => <td className='a' key={index}>{user[item]}</td>)}
              <td><button onClick={() => { props.deleteObj(user.id) }} >x</button></td>
              <td><button onClick={ () => {props.updateteObj(user.id)} } >Update</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
