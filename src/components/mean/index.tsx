import { useEffect, useState } from "react";
import { useGet } from "../../axios";
import { Task } from "../task/task.props";
import { TaskPanel } from "./mean.styles";
import TaskComp from "../task";

export default function Mean() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    setIsLoad(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/books", undefined)
      .then(({ data }) => {
        setIsLoad(false);
        if (data.data !== null) {
          setTasks(data.data);
          console.log(data.data);
        }
      })
      .catch(() => {
        setIsLoad(false);
      });
  }
  return (
    <TaskPanel>
      <h2>
        You’ve got <span>{tasks?.length} book</span>{" "}
      </h2>
      <p>Your task today</p>
      <div className="tasks">
        {isLoad
          ? <span className="loadingg">Loading...</span>
          : tasks?.map((task) => <TaskComp key={task.book.id} task={task} />)}
      </div>
    </TaskPanel>
  );
}
