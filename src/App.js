import React, { useRef } from 'react';
import './App.css';
import { useState } from 'react';
import { SearchArea } from './SearchFolder/SearchArea';
import { TableArea } from './TableFolder/TableArea';
import { FormArea } from './FormFolder/FormArea';

function App() {
  let [obj, setObj] = useState([
    {
      id: 1,
      FullName: "Elshen Abbasov",
      Email: "abbasovelshen@mail.ru",
      Password: "34234"
    
    },
    {
      id: 2,
      FullName: "Murad Orucov",
      Email: "MuradOrucov@mail.ru",
      Password: "45654645"
    },
    {
      id: 3,
      FullName: "Ilham Eliyev",
      Email: "IlhamEliyev@mail.ru",
      Password: "67967967"
    }
   

  ])
  let [inputsValue, setInputsValue] = useState(
    {
      id: "",
      FullName: "",
      Email: "",
      Password: ""

    }
  )
  
  let [id, setId] = useState(4)
  let [sorter, setSorter] = useState(false)
  let firstNameRef = useRef()
  let LastNameRef = useRef()
  let EmailRef = useRef()
  let password =useRef()

  let [searchResult, setSearchResult] = useState({
    id: "",
    FullName: "",
    Email: "",
    Password: ""

  })

  let deleteObj = (id) => {
    let newobj = obj.filter((item) => item.id !== id)
    setObj(newobj)

  }
  let updateteObj = (id) => {
    let result = obj.map(item => {
      if (item.id === id && inputsValue.FullName.length) {
        return {
          id: id,
          FullName: inputsValue.FullName,
          Email: item.Email,
          Password: item.Password
          
        }

      }
      if (item.id === id && inputsValue.Email.length) {
        return {
          id: id,
          FullName: item.FullName,
          Email: inputsValue.Email,
          Password: item.Password
        }

      } if (item.id === id && inputsValue.Password.length) {
        return {
          id: id,
          FullName: item.FullName,
          Email: item.Email,
          Password: inputsValue.Password
        }

      } else {
        return item
      }
    })
    setObj(result)
  }
  let addUser = (e) => {
    e.preventDefault()
    setObj([...obj, { ...inputsValue, id: id }])
    setId(id + 1)
    firstNameRef.current.value = ""
    LastNameRef.current.value = ""
    EmailRef.current.value = ""
    password.current.value=""
    setInputsValue(
      {
        id: "",
        FullName: "",
        Email: "",
        Password: ""
      }
    )
  }
  let search = (e) => {
    e.preventDefault()
    obj.map(item => {
      if (inputsValue.FullName.trim()===item.FullName.trim()) {
       return setSearchResult({...searchResult,
          id: item.id,
          FullName:item.FullName,
          Email: item.Email,
          Password: item.Password
        })
      }
      if (inputsValue.Email.trim()===item.Email.trim()) {
        return setSearchResult({...searchResult,
          id: item.id,
          FullName:item.FullName,
          Email: item.Email,
          Password: item.Password
        })
      }
      if (inputsValue.Password.trim()===item.Password.trim()) {
        return setSearchResult({...searchResult,
          id: item.id,
          FullName:item.FullName,
          Email: item.Email,
          Password: item.Password
        })
      }else{
        return item
      }
      
    })
    firstNameRef.current.value = ""
    LastNameRef.current.value = ""
    EmailRef.current.value = ""
    password.current.value=""
    setInputsValue(
      {
        id: "",
        FullName: "",
        Email: "",
        Password: ""
      }
    )
  }
  let sortTd = (e) => {
    let sortObj = [...obj]
    if (sorter) {
      sortObj.sort((a, b) => {
        if (a[e] > b[e]) {
          return 1
        }
        if (a[e] < b[e]) {
          return -1
        }
        return 0
      })
      setSorter(false)
    } else {
      sortObj.reverse()
      setSorter(true)
    }
    setObj(sortObj)
  }
  return (
    <div className="App">
      <div className='aaa'>
          <FormArea setInputsValue={setInputsValue} inputsValue={inputsValue}
       firstNameRef={firstNameRef} LastNameRef={LastNameRef} EmailRef={EmailRef} password={password} addUser={addUser} search={search} />
     <TableArea obj={obj} deleteObj={deleteObj} updateteObj={updateteObj} sortTd={sortTd}/>
      </div>
    
      <SearchArea searcher={searchResult}/>
    </div>
  );
}

export default App;
