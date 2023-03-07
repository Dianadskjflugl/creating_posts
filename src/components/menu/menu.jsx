import React, { useContext } from 'react';
import classes from './menu.module.css';
import { AuthContext } from '../../context/index';
import { useNavigate } from 'react-router-dom';
import MyButtonNone from '../../UI/buttonNone/buttonNone';

const Menu = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext);
	const navigate = useNavigate()

	const logout = () => {
		setIsAuth(false);
		navigate(`/login`)
		localStorage.removeItem('auth')
	}

	return (
		<header className={classes.header}>
			<div className={classes.block}>
				<div className={classes.app}>
					APPLICATION
				</div>
				<div className={classes.exit}>
					{isAuth &&
						<button className={classes.button} onClick={logout}>выйти</button>
					}
				</div>
			</div>
		</header>);
}

export default Menu;