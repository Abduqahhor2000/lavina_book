import { Ibook } from "../../layout/mainPage/main.props";

export interface HeaderProps {
    setSearchData: (rating: Array<Ibook> | null| string) => void;
}