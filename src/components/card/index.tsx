import { Ibook } from "../../layout/mainPage/main.props";
import { CardDiv } from "./card.styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { usePost } from "../../axios";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import axios, { AxiosError } from 'axios';

export default function Card({ book }: { book: Ibook }) {
  const [isloading, setIsloading] = useState(false);
  const [selected, setSelected] = useState(false);
  console.log(book);

  function addBook() {
    setIsloading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/books", {
      isbn: book.isbn,
    })
      .then(() => {
        setIsloading(false);
        setSelected(true);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            if(!axiosError.response.data){
               setSelected(true)
            }
          } else {
            console.log('Error message:', axiosError.message);
          }
        } else {
          console.error('Error fetching data:', error);
        }
        
        setIsloading(false);
      });
  }

  return (
    <CardDiv>
      <div className={`${selected ? "selected" : ""}`}>
        <h3>{book.title}</h3>
        <div className="aftir">
          <div>
            {book.author}: {` `}
            {book.published}
          </div>
          <div >
            {selected ? null : (
              <LoadingButton
                color="secondary"
                className="load"
                onClick={addBook}
                loading={isloading}
                loadingPosition="start"
                startIcon={<AddShoppingCartIcon />}
                variant="outlined"
              />
            )}
          </div>
        </div>
      </div>
    </CardDiv>
  );
}
