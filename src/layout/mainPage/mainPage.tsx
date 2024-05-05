import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Mean from "../../components/mean";
import SearchPanel from "../../components/searchPanel";
import { WithLayout } from "../layout";
import { Container } from "./mainpage.styles";
import { Ibook } from "./main.props";
import { useNavigate } from "react-router-dom";

const MainPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState<null | Array<Ibook> | string>(null);
  const [canEnter, setCanEnter] = useState(false)
  const navigate = useNavigate()

  useEffect(()=> {
    if(localStorage.getItem("secret")){
      setCanEnter(true)
    }else{
      navigate("/sign-in")
    }
  },[])

  if(!canEnter){
    return <></>
  }

  return (
    <Container>
      <Header setSearchData={setSearchData}/>
      {searchData ? <SearchPanel searchData={searchData} setSearchData={setSearchData} /> : <Mean />}
    </Container>
  );
};

export default WithLayout(MainPage);
