import { Box, Button, Dialog, FormLabel, IconButton, TextField , Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const labelStyle = {mt:1, mb:1}

export const AuthForm = ({onSubmit, isAdmin}) => {
    const [input, setInput] = useState({
        name:"",email:"", password:""
    })
    const [isSignUp, setIsSignUp] = useState(false)

    const handleChange = (e)=>{
        setInput((prevState)=>({...prevState,[e.target.name]: e.target.value}))
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
      onSubmit({input, signUp: isAdmin? false: isSignUp})
    }
    const adminSignIn=()=>{
        window.alert("Admin SignUp Only For Server Site")
        window.alert("Use This Example: ")
        window.alert("Email: admin@gmail.com, Password: ibu123 ")
    }
  return (
    <Dialog PaperProps={{style: {borderRadius: 20}}} open={true}>
        <Box sx={{ml:"auto", padding:1}}>
            <IconButton LinkComponent={Link} to="/">
                <CloseRoundedIcon sx={{color:"red"}}/>
            </IconButton>
        </Box>

 
        <Typography variant='h4' textAlign={"center"}>
        {isSignUp? "Signup" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} width={300} margin={"auto"} padding={5}>
 
           {!isAdmin && isSignUp && <> <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField margin='normal' variant='standard' type={'name'} name='name'
                value={input.name}
                onChange={handleChange}

                /></>}
                <FormLabel sx={labelStyle}>Email</FormLabel>
                <TextField margin='normal' variant='standard' type={'email'} name='email'
                value={input.email}
                onChange={handleChange}/>
                <FormLabel sx={labelStyle}>Password</FormLabel>
                <TextField margin='normal' variant='standard' type={'password'} name='password'
                
                value={input.password}
                onChange={handleChange}/>
                        <Button sx={{mt:2,borderRadius:10, bgcolor:"#2b2d42"}} type='submit' fullWidth
                        variant='contained'
                        >{isSignUp ? "SignUp" : "Login"}</Button>
                        {!isAdmin && ( <Button sx={{mt:2,borderRadius:10, }}  fullWidth onClick={()=>setIsSignUp(!isSignUp)}
                       
                        >Switch To {!isSignUp? "Signup" : "Login"}</Button>)}


<Button sx={{mt:2,borderRadius:10, ":hover":{bgcolor:"red", color:"white"} }}  fullWidth onClick={adminSignIn}
                       
                       >Admin SignUp</Button>
                     
            </Box>
        </form>
    </Dialog>
  )
}
