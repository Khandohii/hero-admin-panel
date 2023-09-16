
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { heroAdding } from "../../actions";
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
    const dispatch = useDispatch();
    const {request} = useHttp();

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
            
            onSubmit = {(values, {resetForm}) => {
                const id = uuidv4();
                dispatch(heroAdding({id, ...values}));
                request(`http://localhost:3001/heroes`, 'POST', JSON.stringify({id, ...values}, null, 2))
                resetForm();
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
                            <option value="fire">Огонь</option>
                            <option value="water">Вода</option>
                            <option value="wind">Ветер</option>
                            <option value="earth">Земля</option>
                    </Field>
                    <ErrorMessage className='text-danger mt-1' name='element' component='div'/>
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;