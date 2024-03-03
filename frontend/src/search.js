import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/list";
import "./App.css";
import { useNavigate } from 'react-router-dom'

const SearchBar = () =>{
    const navigate = useNavigate()
    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


    const onButtonClick1 = () => {
        
          navigate('/dashboard')
        
      }
    
      const onButtonClick2 = () => {
        
        navigate('/search')
      
    }

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText}/>
      <input className={'inputButton'} type="button" onClick={onButtonClick1} value={'Dashboard'} />
      <input className={'inputButton'} type="button" onClick={onButtonClick2} value={'Search Employee'} />
    </div>
  );
}

export default SearchBar;
