import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";


export function RegisterCompoment (){
        const formik = useFormik({
                initialValues:{
                        UserName:"",
                        Password:"",
                        Email:   "",
                        Mobile:  ""
                },
                onSubmit : (values)=>{
                        alert(JSON.stringify(values))
                }
        })

        return(
                <div className="container-fluid">
                     <form onSubmit={formik.handleSubmit}>
                        <h2>User Register</h2>
                        <dl>
                            <dt>UserName</dt>
                            <dd><input type='text' onChange={formik.handleChange} name="UserName" /></dd>
                            <dt>Password</dt>
                            <dd><input type='password' onChange={formik.handleChange} name="Password" /></dd>
                            <dt>Email</dt>
                            <dd><input type='email' onChange={formik.handleChange} name="Email" /></dd>
                            <dt>Mobile</dt>
                            <dd><input type='number' onChange={formik.handleChange} name="Mobile" /></dd>
                        </dl>
                        <Button onClick={formik.handleSubmit} color="primary" variant="contained" size="large">Register</Button>
                     </form>
                     <Link to='/login'>Existing User</Link>

                </div>
        )
}