import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import styles from "./Login.module.css";
import Button from "../../css/Button/Button";
import { registration } from '../../RestAPI/axios';
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required field';
    }
    if (!values.password) {
        errors.password = 'Required field';
    }
    return errors
}
export class Login extends Component {
    render() {
        return (
            <div className={styles.registration}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={validate}
                    onSubmit={(e, {setErrors}) => {
                        registration.sign_in(e).then((data) => {
                            if(data.data.resultCode === 1) {
                                const errors = {};
                                errors.email = String(data.data.messages);
                                setErrors(errors);
                            }
                        });
                    }}>
                    {({ isSubmitting }) => {
                        return <>
                            <Form className={styles.registration__form}>
                                <div className={styles.form__title}>
                                    <h1>Sign in</h1>
                                </div>
                                <div className={styles.form__userInfo}>
                                    <div className={styles.userInfo__item}>
                                        Login
                                        <Field type='email' name='email' />
                                        <ErrorMessage name='email' component='div' className={styles.error} />
                                    </div>
                                    <div className={styles.userInfo__item}>
                                        Password
                                        <Field type='password' name='password' />
                                        <ErrorMessage name='password' component='div' className={styles.error} />
                                    </div>
                                    <div className={styles.userInfo__item}>
                                        Remember me
                                        <Field type='checkbox' name='rememberMe'/>
                                    </div>
                                </div>
                                <Button width='100' color='black' type='submit' disabled={isSubmitting}>SIGN IN</Button>
                            </Form>
                        </>
                    }}
                </Formik>
            </div>
        )
    }
}

