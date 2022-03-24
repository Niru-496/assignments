
import axios from 'axios';
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";


export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const[books,setBooks] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then(response => {

    setBooks([response.data])
    })
  },[])

  return (
    <>
    <div>

    </div>
    {
      books.map((el)=>{
        return (
          <div className="bookContainer" key={el.id}>
          <h2 className="title">{el.title}</h2>
          <img className="image" src={el.imageUrl} alt="#" />
          <div className="author">{el.author}</div>
          <div className="description">{el.description}</div>
          <div className="price">{el.price}</div>
          <div className="section">{el.section}</div>
          <div className="isbnNumber">{el.isbnNumber}</div>
          <ul className="reviews">
            {}
          </ul>
        </div>
        )
      })
    }

    </>
  );
};
