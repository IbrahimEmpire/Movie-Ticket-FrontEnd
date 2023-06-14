import React, { useEffect, useState } from 'react'
import {AppBar, Autocomplete, Box, IconButton, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {adminActions, userActions} from '../store'



export const Header = () => {
    const dispatch = useDispatch()
    const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn)
    const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const [ value, setValue] = useState(0)
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        getAllMovies()
        .then((data)=>setMovies(data.movies))
        .catch((err)=> console.log(err))
     },[])
     const logout = (isAdmin)=>{
        dispatch(isAdmin? adminActions.logout():userActions.logout())
     }
     const handleChange = (e, val)=>{
      
      const movie = movies.find((m)=>m.title === val)
      if(isUserLoggedIn){
          navigate(`/booking/${movie._id}`)
      }
     }
  return (
    <AppBar position='sticky' sx={{bgcolor:"#780AB8"}}>
        <Toolbar>
            <Box width={'20%'}>
              <IconButton LinkComponent={Link} to="/">
                    <MovieCreationIcon/>
                    </IconButton>
            </Box>
            <Box width={'30%'} margin={'auto'}>
            <Autocomplete 
            onChange={handleChange}
         id="free-solo-demo"
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => <TextField sx={{input: {color: "white"}}} variant='standard' {...params} placeholder="Search  Multiple Movies" />}
      />
            </Box>
            <Box>
                <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=> setValue(val)}>
                    <Tab LinkComponent={Link} to="/movies" label="movies"/>
                     { !isAdminLoggedIn && !isUserLoggedIn && (<>   
                    <Tab LinkComponent={Link} to="/admin" label="Admin"/>
                    <Tab LinkComponent={Link} to="/auth" label="user"/>
                     </>)}
                   {isUserLoggedIn && (<>   
                    <Tab LinkComponent={Link} to="/user" label="Profile"/>
                    <Tab onClick={()=> logout(false)} LinkComponent={Link} to="/" label="logout"/>
                       </>)}

                          {isAdminLoggedIn && (<>   
                    <Tab LinkComponent={Link} to="/add" label="Add Movie"/>
                    <Tab LinkComponent={Link} to="/user-admin" label="profile"/>
                    <Tab onClick={()=>logout(true)} LinkComponent={Link} to="/" label="logout"/>
                            </>)}
                   
                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
