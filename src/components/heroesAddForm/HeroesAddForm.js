
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { heroCreated } from "../heroesList/heroesSlice";
import { useHttp } from "../../hooks/http.hook";
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const {filters, filtersLoadingStatus} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmitHandler = (newHero, resetForm) => {
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(heroCreated(newHero)))
            .then(resetForm())
            .catch(err => console.log(err));
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>
        }
        
        // Если фильтры есть, то рендерим их
        if (filters && filters.length > 0 ) {
            return filters.map(({name, label}) => {
                // Один из фильтров нам тут не нужен
                // eslint-disable-next-line
                if (name === 'all')  return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <Formik
            initialValues = {{
                name: '',
                description: '',
                element: '',
            }}

            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, "Minumum length - 2 symbols!")
                        .required('Required field'),

                description: Yup.string()
                        .min(5, 'Mininum 5 symbols'),

                element: Yup.string()
                        .required('Choose skill'),
    
            })}
            
            onSubmit = {(values, { resetForm }) => {
                const id = uuidv4();
                onSubmitHandler({id, ...values}, resetForm)
            }}
        >
            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>

                    <Field
                        id="name"
                        name="name"
                        className="form-control" 
                        required
                        type="text" 
                        placeholder="Как меня зовут?"
                    />
                    <ErrorMessage className='text-danger mt-1' name='name' component='div'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Описание</label>

                    <Field
                        required
                        name="description" 
                        className="form-control" 
                        id="description" 
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}
                        as="textarea"
                    />
                    <ErrorMessage className='text-danger mt-1' name='description' component='div'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field
                        required
                        className="form-select" 
                        id="element" 
                        name="element"
                        as="select"
                        >
                            <option value="">Я владею элементом...</option>
                            {renderFilters(filters, filtersLoadingStatus)}
                    </Field>
                    <ErrorMessage className='text-danger mt-1' name='element' component='div'/>
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;