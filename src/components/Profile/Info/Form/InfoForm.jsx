import { Formik, Field, ErrorMessage, Form } from 'formik'
import React, { Component } from 'react'
import styles from "./InfoForm.module.css";
import Button from "../../../../css/Button/Button";

const CustomInput = () => {

}

class InfoForm extends Component {
    render() {
        const { photos, fullName, aboutMe,
            lookingForAJobDescription, contacts, setProfile } = this.props;

        return (
            <Formik initialValues={
                { photos, fullName, aboutMe, lookingForAJobDescription, ...contacts }}
                onSubmit={(values, { setErrors, setSubmitting }) => {
                    setProfile(values, setErrors, setSubmitting);
                }}
            >
                {({ isSubmitting, handleReset, errors }) => {
                    console.log(errors)
                    return <Form className={styles.infoForm}>
                        <label htmlFor='fullname' className={styles.infoForm__item}>fullname
                        <Field type='text' name='fullName' id='fullname' />
                        </label>
                        <ErrorMessage name='fullName' component='div' />
                        <label htmlFor='aboutMe' className={styles.infoForm__item}>about me
                        <Field type='text' name='aboutMe' id='aboutMe' />
                        </label>
                        <ErrorMessage name='aboutMe' component='div' />
                        <label htmlFor='lookingForAJobDescription' className={styles.infoForm__item}>looking for a job description
                        <Field type='textarea' name='lookingForAJobDescription' id='lookingForAJobDescription' />
                        </label>
                        <ErrorMessage name='lookingForAJobDescription' component='div' />
                        {Object.keys(contacts).map((i) => {
                            return <>
                                <label htmlFor={i} className={styles.infoForm__item}>
                                    {i}<Field type='text' name={i} id={i} />
                                </label>
                                <ErrorMessage name={i} component='div' />
                            </>
                        })
                        }
                        <div className={styles.controlPanelButtons}>
                            <Button color='#446699'
                                type='submit'
                                width='80'
                                disabled={isSubmitting}>
                                EDIT
                        </Button>
                            <Button color='#446699'
                                type='button'
                                width='80'>
                                BACK
                        </Button>
                        </div>

                    </Form>
                }
                }
            </Formik>
        )
    }
}

export default InfoForm

