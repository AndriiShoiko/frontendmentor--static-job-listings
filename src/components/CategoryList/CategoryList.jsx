import s from './CategoryList.module.scss';
import CategoryItem from '../../UI/CategoryItem/CategoryItem';

function CategoryList() {
    return (
        <div className={s.container}>
            <CategoryItem>Frontend</CategoryItem>
            <CategoryItem>Senior</CategoryItem>
        </div>
    )
}

export default CategoryList;
