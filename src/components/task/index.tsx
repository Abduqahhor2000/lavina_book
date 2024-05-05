import { TaskDiv } from "./task.styles";
// import { useDelete} from "../../axios";
// import { useState } from "react";
// import { LoadingButton } from "@mui/lab";
// import axios, { AxiosError } from "axios";
import { Task } from "./task.props";
import Madal from "../modal";
import { LoadingButton } from "@mui/lab";

export default function Task({ task }: { task: Task }) {
  //   const [isloading, setIsloading] = useState(false);
  //   const [selected, setSelected] = useState(false);

  //   function addBook() {
  //     setIsloading(true);
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     useDelete(`books`, {
  //       isbn: task.book.isbn,
  //     })
  //       .then(() => {
  //         setIsloading(false);
  //         setSelected(true);
  //       })
  //       .catch((error) => {
  //         if (axios.isAxiosError(error)) {
  //           const axiosError = error as AxiosError;
  //           if (axiosError.response) {
  //             if (!axiosError.response.data.isOk) {
  //               setSelected(true);
  //             }
  //           } else {
  //             console.log("Error message:", axiosError.message);
  //           }
  //         } else {
  //           console.error("Error fetching data:", error);
  //         }

  //         setIsloading(false);
  //       });
  //   }

  return (
    <>
      <TaskDiv>
        <div>
          <h3>{task.book.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
            varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem
            id.{" "}
          </p>
          <div className="aftir">
            <div>
              {task.book.author}: {` `}
              {task.book.published}-year
            </div>
            <div className="pages">{task.book.pages}</div>
            {/* {selected ? null : (
              
            )} */}
          </div>
          <div className="changes">
            <Madal task={task} />
            <LoadingButton
              style={{ paddingLeft: "20px" }}
              color="error"
              loadingPosition="start"
              startIcon={<img src="trash.svg" alt="trash" />}
              variant="contained"
              size="small"
            />
          </div>
        </div>
      </TaskDiv>
    </>
  );
}
