import * as React from 'react';
import { withFormik, FormikProps, FormikBag } from 'formik';
import { SearchablePlayerSchema } from './validation';
import { MyFormValues, MyFormProps, OtherProps } from './';
import {
    Form,
    Input,
    Select,
    Button,
    WrapperItem,
    WrapperSubmit,
    ErrorInput
} from './style'

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. 
// InjectedFormikProps was artifact of when Formik only exported a HoC. 
// It is also less flexible as it MUST wrap all props (it passes them through).
export const InnerForm = (props: OtherProps & FormikProps<MyFormValues>) => {
    const {
        handleSubmit,
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        positions
    } = props;
    let optionsPosition: Array<any> = [];
    if (positions) {
        optionsPosition = positions.map((item, index) => {
            const { value, content } = item;
            return (
                <option key={index} value={value}>
                    {content}
                </option>
            );
        });
    }
    return (
        <Form onSubmit={handleSubmit} >
            <WrapperItem>
                <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                    placeholder="Player Name"
                />
                {touched.name &&
                errors.name &&
                <ErrorInput>
                    {errors.name}
                 </ErrorInput>
                }
            </WrapperItem>
            <WrapperItem>
                <Select
                    name="position"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.position}
                >
                    <option value="position">Position</option>
                    {optionsPosition}
                </Select>
                {touched.position &&
                    errors.position &&
                    <ErrorInput>
                    {errors.position}
                 </ErrorInput>
                   }
            </WrapperItem>
            <WrapperItem>
                <Input
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    name="age"
                    placeholder="Age"
                />
                {touched.age &&
                    errors.age &&
                    <ErrorInput>
                    {errors.age}
                 </ErrorInput>
                    }
            </WrapperItem>
            <WrapperSubmit>
                <Button
                    className={'fafa'}
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting? <span id="submitting">Buscando</span>: 'Buscar' }
                </Button>              
            </WrapperSubmit>
            
        </Form>
    );
};



// Wrap our form with the using withFormik HoC
export const PlayerForm = withFormik<MyFormProps, MyFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            name: props.initialName || '',
            position: props.initialPosition || 'position',
            age: props.initialAge || ''
        };
    },

    // Add a custom validation function (this can be async too!)
    validationSchema: SearchablePlayerSchema,

    handleSubmit: (values: MyFormValues, formikBag: FormikBag<OtherProps, MyFormValues>) => {
        const { setFilterPlayers } = formikBag.props;
        const { setSubmitting } = formikBag;
        values.age = values.age.toString(); 
        setFilterPlayers(values)
        setSubmitting(false);
    }
})(InnerForm);
