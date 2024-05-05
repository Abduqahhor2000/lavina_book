import { Button } from "@mui/material";
import { WithLayout } from "../layout";
import { Container } from "../signUp/signUp.styles";
import Input from "../../components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProps } from "./signIn.props";
import { Link, useNavigate } from "react-router-dom";
import { useGet } from "../../axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { Save } from "@mui/icons-material";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function SignIn(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (formData) => {
    setErrorMessage("");
    setIsLoading(true);
    localStorage.setItem("secret", formData.secret);
    localStorage.setItem("key", formData.key);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/myself", undefined)
      .then(() => {
        reset();
        navigate("/");
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage("Password or username is incorrect.");
        localStorage.removeItem("secret");
        localStorage.removeItem("key");
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <div className="sign-up">
        <h2>Sign in</h2>
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
          No account?{" "}
          <Link className="link" to="/sign-up">
            Go to sign up
          </Link>
          .
        </div>
      </div>
    </Container>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithLayout(SignIn);
