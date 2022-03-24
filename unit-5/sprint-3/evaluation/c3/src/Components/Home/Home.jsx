import styled from 'styled-components'
import {useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
const [book,setBook] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8080/books").then((response) => {
    setBook([...response.data]);

    console.log(response.data);
  })
},[])


  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    background-color:teal;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/*
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to
            show in books Card.
        */}
        {
          book.map((el)=>{
            return <Link to ={`/books/${el.id}`} kry={el.id}>
              <img src={el.imageUrl}/>
              <h1>{el.title}</h1>
              <h4>{el.price}</h4>
              <h3>{el.description}</h3>

            </Link>
          })
        }

      </Main>
    </div>
  );
};
