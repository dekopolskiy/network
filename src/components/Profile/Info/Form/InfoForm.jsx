import { Formik, Field, ErrorMessage, Form } from 'formik'
import React, { Component } from 'react'
import styles from "./InfoForm.module.css";
import Button from "../../../../css/Button/Button";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Required'),
    aboutMe: Yup.string()
      .required('Required'),
    lookingForAJobDescription: Yup.string().required('Required'),
  });

class InfoForm extends Component {

    render() {
        const { fullName, aboutMe,
            lookingForAJobDescription, contacts, setProfile, handleForm } = this.props;

        return (
            <Formik initialValues={
                { fullName, aboutMe, lookingForAJobDescription, ...contacts }}
                valtionSchema={SignupSchema}
                onSubmit={(values, { setErrors, setSubmitting }) => {
                    setProfile(values, setErrors, setSubmitting);
                }}
            >
                {({ isSubmitting, setFieldValue }) => {
                    return <Form className={styles.infoForm}>
                        <label className={styles.infoForm__item}><h3>fullname</h3>
                            <Field type='text' name='fullName'/>
                            <ErrorMessage name='fullName' component='div' className={styles.item__error} />
                        </label>
                        {/* FILE onChange={ (e) => { setFieldValue('photos.large', e.target.files[0]);*/}
                        <label className={styles.infoForm__item}><h3>about me</h3>
                            <Field type='text' name='aboutMe'/>
                            <ErrorMessage name='aboutMe' component='div' className={styles.item__error}/>
                        </label>
                        <label className={styles.infoForm__item}><h3>looking for a job description</h3>
                            <Field type='textarea' name='lookingForAJobDescription'/>
                            <ErrorMessage name='lookingForAJobDescription' component='div' className={styles.item__error}/>
                        </label>
                        {Object.keys(contacts).map((i) => {
                            return <>
                                <label className={styles.infoForm__item}>
                                    <h3>{i}</h3><Field type='text' name={i} />
                                    <ErrorMessage name={i} component='div' className={styles.item__error}/>
                                </label>
                            </>
                        })
                        }
                        <div className={styles.controlPanelButtons}>
                            <Button color='#446699'
                                type='submit'
                                wh='80'
                                disabled={isSubmitting}>
                                Edit profile
                        </Button>
                            <Button
                                onClick={handleForm} 
                                color='#446699'
                                type='button'
                                wh='80'>
                                Back
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

