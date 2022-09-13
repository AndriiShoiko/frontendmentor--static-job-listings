export function selectAllVacancies(store) {
    return store.vacancies;
}

export function selectVacanciesByFilter(store, filters = []) {
    return store.vacancies;
}

export function selectCategoriesFromVacancie(store, id) {

    let categories = [];
    const data = store.vacancies.find(element => element.id === id);

    if (data) {
        categories.push(data.role);
        categories.push(data.level);

        data.languages.forEach(element => {
            categories.push(element);
        });

        data.tools.forEach(element => {
            categories.push(element);
        });
    }

    return categories;
}