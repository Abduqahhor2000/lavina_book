import { useEffect, useState } from "react";
import Search from "../search/search";
import { Head } from "./header.styles";
import { useGet } from "../../axios";
import { HeaderProps } from "./header.props";
import {useDebounce} from "../../helper/debounce"
import { useNavigate } from "react-router-dom";

export default function Header({setSearchData}: HeaderProps) {
  const [searchText, setSearchText] = useState<string>("");
  const debounce = useDebounce(getBooks, 1000)
  const navigate = useNavigate()

  useEffect(()=>{
    debounce(searchText)
  }, [searchText])

  function getBooks(text: undefined | string) {
    console.log("salom");
    setSearchData("loading")
    
    if(!text){
      setSearchData(null)
      return
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(`/books/${text}`, undefined).then(({ data }) => {
      if(data){
        setSearchData(data.data)
      }else{
        setSearchData([])
      }
    }).catch(() => setSearchData([]))
  }

  function logout () {
    localStorage.removeItem("secret")
    localStorage.removeItem("key")
    navigate(("/sign-in"))
  }
  

  return (
    <Head>
      <div className="logotip">
        <img className="logo" src="logo.svg" alt="logo" />
        <span className="brandname">
          Books <span>List</span>
        </span>
        <Search value={searchText} setValue={setSearchText} />
      </div>
      <div className="profile">
        <img src="bell.svg" alt="" />
        <span onClick={logout}>
          <img src="img.png" alt="avatar" />
        </span>
      </div>
    </Head>
  );
}
