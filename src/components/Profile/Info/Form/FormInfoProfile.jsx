import classnames from "classnames";
import styles from "./FormInfoProfile.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import { createField } from './createField';
import Button from "../../../../css/Button/Button";

class FormInfoProfile extends React.Component {
    validate = (values) => {
        const errors = {};
        if (!values.aboutMe) {
            errors.aboutMe = 'Required';
        }
        return errors;
    }

    render() {
        const { aboutMe, lookingForAJobDescription, contacts, handleForm } = this.props;
        return (
            <Formik
                onSubmit={(values, { setSubmitting }) => {
                    handleForm(false);
                    setTimeout(() => {
                        alert(JSON.stringify(values))
                        setSubmitting(false);
                    }
                        , 1000)
                }}
                initialValues={{ aboutMe, lookingForAJobDescription }}
                validate={this.validate}
            >
                {({ isSubmitting }) => {
                    return <Form className={styles.form}>
                        <h1>Edit profile</h1>
                        {createField(Field, 'aboutMe', { type: 'text', name: 'aboutMe' })}
                        {createField(ErrorMessage, '', { name: 'aboutMe', component: 'div', className: 'error' })}
                        {createField(Field, 'lookingForAJobDescription', { type: 'text', name: 'lookingForAJobDescription' })}
                        {createField(ErrorMessage, '', { name: 'lookingForAJobDescription', component: 'div' })}
                        {Object.keys(contacts).map((i) => {
                            return createField(Field, i, { type: 'text', name: { i } })
                        })}
                        <Button type='submit' disabled={isSubmitting} color='green'>Edit</Button>
                    </Form>
                }}
            </Formik>
        )
    }
}

export default FormInfoProfile;




