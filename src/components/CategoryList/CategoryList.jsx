import s from './CategoryList.module.scss';
import CategoryItem from '../../UI/CategoryItem/CategoryItem';
import { useSelector } from "react-redux";
import { selectCategoriesFromVacancie } from "../../store/vacancies/vacanciesSelectors";

function CategoryList({ id }) {
    const categories = useSelector((state) => selectCategoriesFromVacancie(state, id));
    return (
        <div className={s.container}>
            {categories.map((element, index) => <CategoryItem key={index}>{element}</CategoryItem>)}
        </div>
    )
}

export default CategoryList;
