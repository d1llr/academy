import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.scss'
import InputMask from 'react-input-mask'
import { IUser, useGetUserregisterMutation } from '../../../../redux/api/RegisterApi';
import { phoneForBackend } from '../FeedBackForm/FeedBackForm';
import Input from 'antd/es/input/Input';
import Spinner from '../../spinner/Spinner';


type FormValues = {
    email: string;
    password: string;
    phone: string,
    last_name: string,
    first_name: string,
    re_password: string
};



const handleChange = (e) => {

}




export default function RegisterForm({ props }) {
    const { register, handleSubmit } = useForm<IUser>();


    const [regUser, { isLoading, isSuccess, isError, status }] = useGetUserregisterMutation()
    const onSubmit: SubmitHandler<IUser> = async (data) => {
        data.phone = await phoneForBackend(data.phone)
        console.log(data);
        
        await regUser(
            data
        )
    }


    return (
        <>
            <div className={styles.form_container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.blocks_wrapper}>
                        <div className={styles.block}>
                            <input
                                type='email'
                                {...register("email")} 
                                placeholder='Почта'
                                required
                            />
                            <input
                                type='password'
                                {...register("password")}
                                placeholder='Пароль'
                                autoComplete="no"
                                required
                            />
                            <input
                                type='password'
                                {...register("re_password")}
                                placeholder='Повторите пароль'
                                autoComplete="no"
                                required
                            />
                        </div>
                        <div className={styles.block}>
                            <input
                                type='name'
                                {...register("first_name")}
                                placeholder='Имя'
                                required
                            />
                            <input
                                type='last_name'
                                {...register("last_name")}
                                placeholder='Фамилия'
                                required
                            />
                            <InputMask
                                mask="+7(999)999-99-99"
                                maskChar="_"
                                alwaysShowMask
                                type='tel'
                                {...register('phone')}
                            />
                        </div>
                    </div>
                    {
                        isLoading &&
                        <div className={styles.loading}>
                            <Spinner />
                        </div>
                    }
                    {isSuccess &&
                        <div className={styles.success}>
                            Проверьте почту
                        </div>
                    }
                    {isError &&
                        <div className={styles.error}>
                            Ошибка
                        </div>
                    }
                    {status === 'uninitialized' && <input type="submit" value={'Зарегистрироваться'} className={styles.submit} />}
                    <div className={styles.register}>
                        <span className={styles.text}>
                            Есть аккаунт?
                        </span>
                        <span className={styles.register_action} onClick={props}>
                            Войдите!
                        </span>
                    </div>
                </form>
            </div>
        </>
    );

}