import { TopUtilityBar } from "./TopUtilityBar/TopUtilityBar";
import MainHeader from "./MainHeader/MainHeader";
import CategoryNavigationBar from "./CategoryNavigationBar/CategoryNavigationBar";

export const Header = () => {
    return (
        <div>
            <TopUtilityBar/>
            <MainHeader/>
            <CategoryNavigationBar/>
        </div>
    )
}
