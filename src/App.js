import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import Input from "./components/Input";
import SearchContainer from "./components/SearchContainer";
import SubmitButton from "./components/SubmitButton";

import {useForm} from "react-hook-form";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [searchNameBtnClick, onSubmit] = useState('lol');
  const {register, handleSubmit} = useForm({
    mode: 'onBlur'
  });


  useEffect(() => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=uesYZavYZfm3JqFsz0n9X8N7cI6slHS7&q=${searchNameBtnClick.name}&limit=10`)
      .then(res => {
        setData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, [searchNameBtnClick]);

  return (
    <div className="App">
      <section className="App-wrapper">
        <div className="header"><h1>Search gifs</h1></div>
        <SearchContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              ref={register}
              id='search'
              type='text'
              label='Search Gifs'
              name='name'
            />
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </SearchContainer>
        <div className="container">
          <div className="grid-container">
            {
              data.map((gif, index) => {
                return <div className='grid-item' key={index}>
                  <img src={gif.images.fixed_height_small.url} alt={searchNameBtnClick}/>
                </div>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
