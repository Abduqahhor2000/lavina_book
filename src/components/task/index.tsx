import { TaskDiv } from "./task.styles";
import { useState } from "react";
// import axios, { AxiosError } from "axios";
import { Task } from "./task.props";
import Madal from "../modal";
import { LoadingButton } from "@mui/lab";
import { useDelete } from "../../axios";

export default function Task({ task, setTasks, tasks }: { task: Task, setTasks: any, tasks: Task[]}) {
    const [isloading, setIsloading] = useState(false);
  //   const [selected, setSelected] = useState(false);
    
    function DelBook() {
      setIsloading(true);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDelete(`/books/${task?.book?.id}`, undefined)
        .then(({data}) => {
          setIsloading(false);
          setTasks(data.data)
          // setSelected(true);
        })
        .catch((e) => {
          console.log(e);
          
          // if (axios.isAxiosError(error)) {
          //   const axiosError = error as AxiosError;
          //   if (axiosError.response) {
          //     if (!axiosError.response.data.isOk) {
          //       // setSelected(true);
          //     }
          //   } else {
          //     console.log("Error message:", axiosError.message);
          //   }
          // } else {
          //   console.error("Error fetching data:", error);
          // }

          setIsloading(false);
        });
    }

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
            <Madal task={task} setTasks={setTasks} tasks={tasks} />
            <LoadingButton
              onClick={()=>DelBook()}
              style={{ paddingLeft: "20px" }}
              color="error"
              loading={isloading}
              loadingPosition="center"
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
