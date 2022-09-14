export function selectAllVacancies(store) {
    return store.vacancies;
}

export function selectVacanciesByFilter(store, filters = []) {

    let filterVacancies = [];

    if (filters.length === 0) {
        return store.vacancies;
    }

    store.vacancies.forEach(element => {

        let filtersVacancies = [];
        let search_ok = true;

        filtersVacancies.push(element.role);
        filtersVacancies.push(element.level);
        filtersVacancies = filtersVacancies.concat(element.languages);
        filtersVacancies = filtersVacancies.concat(element.tools);

        for (const filter of filters) {
            if (!filtersVacancies.includes(filter)) {
                search_ok = false;
                break;
            }
        }
        if (search_ok) {
            filterVacancies.push(element);
        }

    });

    return filterVacancies;
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