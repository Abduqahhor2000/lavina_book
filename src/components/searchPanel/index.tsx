import { Ibook } from "../../layout/mainPage/main.props";
import Card from "../card";
import { SearchPanelProps } from "./searchPanel.props";
import { Panel } from "./searchPanel.styles";

export default function SearchPanel({searchData, setSearchData}: SearchPanelProps) {

  return (
    <Panel>
        <div className="result">
            <span onClick={() =>setSearchData(null)} className="goback">{"< Go Back"} </span>
            <span> Search result: {searchData === "loading" ? "" : searchData?.length}</span>
        </div>
        <div className="books">
            {
              typeof searchData ===  "string" ? <span className="loading">Loading...</span> :  searchData?.map((book: Ibook) => <Card key={book.isbn} book={book}/>)
            }
        </div>
    </Panel>
  )
}
