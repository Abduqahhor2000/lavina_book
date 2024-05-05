import { Button } from "@mui/material";
import { WithLayout } from "../layout";
import { Container } from "./signUp.styles";
import Input from "../../components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProps } from "./signUp.props";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../../axios";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SignUp = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (formData) => {
    setIsLoading(true);
    setErrorMessage("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/signup", formData)
      .then(() => {
        localStorage.setItem("key", formData.key);
        localStorage.setItem("secret", formData.secret);
        setIsLoading(false);
        reset();
        navigate("/");
      })
      .catch(() => {
        setErrorMessage("Username already exists");
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <div className="sign-up">
        <h2>Sign up</h2>
        <Button variant="outlined" className="sign-button">
          <img src="google.svg" alt="" /> Continue with Google
        </Button>
        <Button variant="outlined" className="sign-button">
          <img src="facebook.svg" alt="" /> Continue with Facebook
        </Button>
        <div className="line">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Enter your name"
            labelText="Your name"
            error={errors.name}
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          <Input
            placeholder="Enter your email"
            labelText="Your email"
            error={errors.email}
            type="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          <Input
            placeholder="Enter your username"
            labelText="Your username"
            error={errors.key}
            {...register("key", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <Input
            placeholder="Enter your password"
            labelText="Your password"
            error={errors.secret}
            type="password"
            {...register("secret", {
              required: { value: true, message: "Password is required" },
            })}
          />
          {errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : null}
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
        </form>
        <div className="already">
          Already signed up?{" "}
          <Link className="link" to="/sign-in">
            Go to sign in
          </Link>
          .
        </div>
      </div>
    </Container>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default WithLayout(SignUp);
