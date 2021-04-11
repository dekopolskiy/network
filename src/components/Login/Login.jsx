import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import styles from "./Login.module.css";
import Button from "../../css/Button/Button";
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
        const { sign_in, userID } = this.props;
        return (
            <div className={styles.registration}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={ validate }
                    onSubmit={( e, { setErrors,  }) => {
                        sign_in(e);
                    }}>
                    {({ isSubmitting, errors }) => {
                        return <>
                            <Form className={styles.registration__form}>
                                <div className={styles.form__title}>
                                    <h1>Sign in</h1>
                                </div>
                                <div className={styles.form__userInfo}>
                                    <div className={styles.userInfo__item}>
                                        Login
                                        <Field type='email' name='email' className={styles.borderError} />
                                        <ErrorMessage name='email' component='div' className={styles.error} />
                                    </div>
                                    <div className={styles.userInfo__item}>
                                        Password
                                        <Field type='password' name='password' className={errors.password && styles.borderError}/>
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

