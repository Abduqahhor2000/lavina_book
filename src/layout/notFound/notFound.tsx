import { WithLayout } from "../layout";
import Button from "@mui/material/Button";
import { Container } from "./notFound.styles";
import img404 from "./404.svg";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {

  const goBack = () => {
    window.history.back()
  };

  return (
    <Container>
      <div>
        <img className="img404" alt="" src={img404} />
        <div className="buttons">
          <Link to="/">
            <Button className="button" variant="contained">
              Go Home Page
            </Button>
          </Link>
          <Button onClick={goBack} className="button" variant="outlined">
            Reload Page
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default WithLayout(NotFound);
