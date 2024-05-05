import { Ibook } from "../../layout/mainPage/main.props";

export interface SearchPanelProps {
    searchData: Array<Ibook> | null | string
    setSearchData: (data:Array<Ibook> | null) => void
}