import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-date-picker'

const validationSchema = yup.object({
    email : yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),

    password : yup
        .string("Enter your password")
        .min(8, "Enter at least 8 characters")
        .required("Password is required"),

    username : yup
        .string("Enter your password")
        .required("Username is required"),

    birthday : yup
        .string("Enter your birthday")
        .required("Birthday is required"),

    bio : yup
        .string("Enter your bio")

})

const LogIn = () => {
    const [value, onChange] = useState(new Date());

    const formik = useFormik({
        initialValues : {
            email : "johnsmith@gmail.com",
            username : "johnsmith",
            password : "abcd1234",
            birthday : "01/08/1976",
            bio : "I enjoy painting"
        },
        validationSchema : validationSchema,
        onSubmit : (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
                <TextField fullWidth 
                    id = "email"
                    name = "email"
                    label = "Email"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.errors.email)}
                    helperText = {formik.touched.email && formik.errors.email}
                />

                <TextField fullWidth 
                    id = "username"
                    name = "username"
                    label = "Username"
                    value = {formik.values.username}
                    onChange = {formik.handleChange}
                    error = {formik.touched.username && Boolean(formik.errors.username)}
                    helperText = {formik.touched.username && formik.errors.username}
                />

                <TextField fullWidth 
                    id = "password"
                    name = "password"
                    label = "Password"
                    value = {formik.values.password}
                    onChange = {formik.handleChange}
                    error = {formik.touched.password && Boolean(formik.errors.password)}
                    helperText = {formik.touched.password && formik.errors.password}
                />

                <DatePicker 
                    onChange = {formik.handleChange} 
                    value = {formik.values.birthday}
                />

                <TextField fullWidth 
                    id = "bio"
                    name = "bio"
                    label = "Bio"
                    value = {formik.values.bio}
                    onChange = {formik.handleChange}
                    error = {formik.touched.bio && Boolean(formik.errors.bio)}
                    helperText = {formik.touched.bio && formik.errors.bio}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default LogIn;