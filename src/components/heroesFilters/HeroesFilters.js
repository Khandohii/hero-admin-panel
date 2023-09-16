
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filtersFetched, filtersFetching, filtersFetchingError, activateFilter } from '../../actions';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => {
                dispatch(filtersFetched(data))
            })
            .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFiltersList = (arr, activeFilter) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">There aren't filters yet...</h5>
        }
        const activeFilt = activeFilter;
        
        return arr.map((item) => {
            let elementClassName, label;
            let activeFilter = item === activeFilt ? 'active' : null;
            switch (item) {
                case 'all':
                    elementClassName = 'btn-outline-dark';
                    label = 'Все';
                    break;
                case 'fire':
                    elementClassName = 'bg-danger';
                    label = 'Огонь';
                    break;
                case 'water':
                    elementClassName = 'bg-primary';
                    label = 'Вода';
                    break;
                case 'wind':
                    elementClassName = 'bg-success';
                    label = 'Ветер';
                    break;
                case 'earth':
                    elementClassName = 'bg-secondary';
                    label = 'Земля';
                    break;
                default:
                    elementClassName = 'bg-warning';
                    label = 'Error';
            }
            
            return <button onClick={() => dispatch(activateFilter(item))} key={item} className={`btn ${elementClassName} ${activeFilter}`}>{label}</button>
        })
    }

    const elements = renderFiltersList(filters, activeFilter);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;