import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import styles from "./Login.module.css";
import Button from "../../css/Button/Button";
import classNames from 'classnames';
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

const isEmpty = (obj) => {
    return Object.keys(obj).length? true: false;
}
// isEmpty(errors)? styles.error : null)}
export class Login extends Component {
    render() {
        const { sign_in, captcha } = this.props;
        return (
            <div className={styles.registration}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={ validate }
                    onSubmit={( props, { setErrors, setSubmitting }) => {
                        sign_in({ ...props, setErrors, setSubmitting });
                    }}>
                    {({ isSubmitting, errors }) => {
                        return <>
                            <Form className={classNames(styles.registration__form)} >
                                <div className={styles.form__title}>
                                    <h1>Sign in</h1>
                                </div>
                                <div className={styles.form__userInfo}>
                                    <div className={styles.userInfo__item}>
                                        <ErrorMessage name='email' component='div' className={styles.error} />
                                        Login
                                        <Field type='email' name='email' className={classNames(errors.email? styles.borderRed: null)}/>
                                    </div>
                                    <div className={styles.userInfo__item}>
                                        Password
                                        <Field type='password' name='password' className={classNames(errors.password? styles.borderRed: null)}/>
                                    </div>
                                    <div className={styles.userInfo__item}>
                                        Remember me
                                        <Field type='checkbox' name='rememberMe'/>
                                    </div>
                                    {captcha?
                                    <div className={styles.userInfo__item}>
                                        <img src={this.props.captcha} width='100'/>
                                        <Field type='text' name='captcha' />
                                    </div>
                                    : null }
                                </div>
                                <button type='submit' disabled={isSubmitting} className={styles.sign_in}>SIGN IN</button>
                            </Form>
                        </>
                    }}
                </Formik>
            </div>
        )
    }
}

