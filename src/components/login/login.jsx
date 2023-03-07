import React, { useContext, useState } from 'react';
import classes from './login.module.css';
import { AuthContext } from '../../context/index';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/button/button';
import MyInput from '../../UI/input/input';


const Login = () => {
    const [data, setData] = useState({ login: '', pasword: '' })
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate()

    const AddLogin = event => {
        if (!data.login == '' && !data.pasword == '') {
            event.preventDefault();
            setIsAuth(true);
            navigate(`/posts`)
            localStorage.setItem('auth', 'true')
            setData({ login: '', pasword: '' })
        }
        else {
            event.preventDefault();
            return setIsAuth(false)
        }
    }

    return (
        <div className={classes.login}>
            <div className={classes.block}>
                <h1>Авторизация</h1>
                <form onSubmit={AddLogin}>
                    <div className={classes.inputs}>
                    <div className={classes.input}>
                        <MyInput 
                            type="text"
                            onChange={e => setData({ ...data, login: e.target.value })}
                            placeholder="Введите логин"
                            value={data.login} />
                    </div>
                    <div className={classes.input}>
                        <MyInput type="password"
                            onChange={e => setData({ ...data, pasword: e.target.value })}
                            placeholder="Введите пароль"
                            value={data.pasword} />
                    </div>
                    <div className={classes.button}>
                        <MyButton>войти</MyButton>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
