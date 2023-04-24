import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.scss'
import InputMask from 'react-input-mask'


type FormValuesEmail = {
    email: string;
    password: string;
};

type FormValuesPhone = {
    phone: string;
    password: string;
};

interface IData {
    type: string,
    value: string,
}


const handleChange = (e) => {

}




export default function RegisterForm({ props }) {
    const { register, handleSubmit } = useForm<FormValuesEmail | FormValuesPhone>();
    const onSubmit: SubmitHandler<FormValuesEmail | FormValuesPhone> = data => console.log(data);

    return (
        <>
            <div className={styles.form_container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.blocks_wrapper}>
                        <div className={styles.block}>
                            <input
                                type='email'
                                {...register("email")}
                                onChange={e => handleChange(e.target.value)}
                                placeholder='Почта'
                                required
                            />
                            <input
                                type='password'
                                {...register("password")}
                                placeholder='Пароль'
                                autoComplete="current-password"
                                required
                            />
                            <input
                                type='password'
                                {...register("password")}
                                placeholder='Повторите пароль'
                                autoComplete="no"
                                required
                            />
                        </div>
                        <div className={styles.block}>
                            <input
                                type='name'
                                {...register("email")}
                                onChange={e => handleChange(e.target.value)}
                                placeholder='Имя'
                                required
                            />
                            <input
                                type='last_name'
                                {...register("email")}
                                onChange={e => handleChange(e.target.value)}
                                placeholder='Фамилия'
                                required
                            />
                            <input
                                type='tel'
                                {...register("password")}
                                placeholder='Телефон'
                                autoComplete="on"
                                required
                            />
                        </div>
                    </div>



                    <input type="submit" value='Зарегистрироваться' className={styles.submit} />
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