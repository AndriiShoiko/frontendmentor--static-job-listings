import s from './CategoryList.module.scss';
import CategoryItem from '../../UI/CategoryItem/CategoryItem';
import { useSelector, useDispatch } from "react-redux";
import { selectCategoriesFromVacancie } from "../../store/vacancies/vacanciesSelectors";

import { addFilter } from "../../store/filters/filtersActions";

function CategoryList({ id }) {
    const categories = useSelector((state) => selectCategoriesFromVacancie(state, id));
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
            {categories.map((element, index) => <CategoryItem key={index} onClick={() => {
                dispatch(addFilter(element));
            }}>
                {element}
            </CategoryItem>)}
        </div>
    )
}

export default CategoryList;
