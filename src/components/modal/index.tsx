import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Task } from "../task/task.props";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { useNavigatse } from "react-router-dom";
import Input from "../input/input";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { FormProps } from "./modal.props";
import { usePatch } from "../../axios";
import { ContainerModal } from "./modal.styles";

export default function Madal({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      author: task.book.author,
      pages: task.book.pages,
      title: task.book.title,
      published: task.book.published,
    },
  });

  const onSubmit: SubmitHandler<FormProps> = (formData) => {
    setIsLoading(true);
    setErrorMessage("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePatch(`/books/${task.book.id}`, {
      book: { ...formData, isbn: task.book.isbn },
      status: task.status,
    })
      .then(() => {
        setIsLoading(false);
        reset();
        setOpen(false);
      })
      .catch(() => {
        setErrorMessage("Something is wrong?");
        setIsLoading(false);
      });
  };

  return (
    <>
      <Button
        style={{"paddingLeft":"20px"}}
        onClick={handleOpen}
        startIcon={<img src="edit.svg" alt="editIcon" />}
        variant="contained"
        size="small"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal>
          <h2 className="editbook">Edit a book</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name={"title"}
              rules={{
                required: { value: true, message: "Title is required" },
              }}
              render={({ field }) => (
                <Input
                  placeholder="Enter your title"
                  labelText="Title"
                  error={errors.title}
                  {...field}
                />
              )}
            />

            <Input
              placeholder="Enter your Author"
              labelText="Author"
              error={errors.author}
              {...register("author", {
                required: { value: true, message: "Author is required" },
              })}
            />
            <Input
              placeholder="Enter your published"
              labelText="Published"
              error={errors.published}
              type="number"
              {...register("published", {
                required: { value: true, message: "Published is required" },
              })}
            />
            <Input
              placeholder="Enter your pages"
              labelText="Pages"
              error={errors.pages}
              type="number"
              {...register("pages", {
                required: { value: true, message: "Pages is required" },
              })}
            />
            {errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : null}
            <div className="buttons">
              <Button onClick={() =>{ handleClose(); reset(); setErrorMessage("")}} variant="outlined" className="submit">
                Close
              </Button>
              {isLoading ? (
                <LoadingButton
                  loading
                  loadingPosition="center"
                  startIcon={<Save />}
                  variant="contained"
                  className="submit"
                >
                  Submit
                </LoadingButton>
              ) : (
                <Button type="submit" className="submit" variant="contained">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </ContainerModal>
      </Modal>
    </>
  );
}
