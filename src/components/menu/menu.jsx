import React, { useContext } from 'react';
import classes from './menu.module.css';
import { AuthContext } from '../../context/index';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Typography } from '@material-ui/core';

const Menu = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext);
	const navigate = useNavigate()

	const logout = () => {
		setIsAuth(false);
		navigate(`/login`)
		localStorage.removeItem('auth')
	}

	return (
		<AppBar position="static">
			<div className={classes.header}>
				<div className={classes.app}>
					<Typography color="inherit">APPLICATION</Typography>
				</div>
				<div className={classes.exit}>
					{isAuth &&
						<Button onClick={logout} color="inherit">выйти</Button>
					}
				</div>
			</div>
		</AppBar>);
}

export default Menu;