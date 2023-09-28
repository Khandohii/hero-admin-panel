

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import store from "../../store";
import { selectAll } from "../heroesFilters/filtersSlice";
import { useCreateHeroMutation } from "../../api/apiSLice";

const HeroesAddForm = () => {
    const [createHero] = useCreateHeroMutation();

    const {filtersLoadingStatus} = useSelector(state => state.filters);
    const filters = selectAll(store.getState());

    const onSubmitHandler = (newHero, resetForm) => {
        createHero(newHero).unwrap();
        resetForm()
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Loading elements</option>
        } else if (status === "error") {
            return <option>Error loading</option>
        }
        
        if (filters && filters.length > 0 ) {
            return filters.map(({name, label}) => {
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
                        .required('Choose a skill'),
    
            })}
            
            onSubmit = {(values, { resetForm }) => {
                const id = uuidv4();
                onSubmitHandler({id, ...values}, resetForm)
            }}
        >
            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Name of a new hero</label>

                    <Field
                        id="name"
                        name="name"
                        className="form-control" 
                        required
                        type="text" 
                        placeholder="What is my name?"
                    />
                    <ErrorMessage className='text-danger mt-1' name='name' component='div'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Description</label>

                    <Field
                        required
                        name="description" 
                        className="form-control" 
                        id="description" 
                        placeholder="What can I do?"
                        style={{"height": '130px'}}
                        as="textarea"
                    />
                    <ErrorMessage className='text-danger mt-1' name='description' component='div'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Choose hero element</label>
                    <Field
                        required
                        className="form-select" 
                        id="element" 
                        name="element"
                        as="select"
                        >
                            <option value="">I own the element...</option>
                            {renderFilters(filters, filtersLoadingStatus)}
                    </Field>
                    <ErrorMessage className='text-danger mt-1' name='element' component='div'/>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;