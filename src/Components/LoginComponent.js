import { Button } from "@mui/material";
import { useFormik } from "formik";


export function LoginComponent(){
        const formik = useFormik({
                initialValues:{
                        UserName:'',
                        Password:''
                },
                onSubmit: (values)=>{
                        alert(JSON.stringify(values))
                }
        })

        return(
                <div className="container-fluid">
                       <form onSubmit={formik.handleSubmit}>
                       <h2>Login Page</h2> 
                        <dl>
                                <dt>UserName</dt>
                                <dd><input type='text' onChange={formik.handleChange} name="UserName"/></dd>
                                <dt>Password</dt>
                                <dd><input type='password' onChange={formik.handleChange} name="Password"/></dd>
                        </dl>
                        <Button onClick={formik.handleSubmit} variant='contained' color='success'>Login</Button>

                       </form>
                </div>
        )
}