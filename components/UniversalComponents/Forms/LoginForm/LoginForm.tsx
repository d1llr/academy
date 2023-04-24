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




export default function LoginForm({ props }) {
    const [phase, setPhase] = useState('phone')
    const { register, handleSubmit } = useForm<FormValuesEmail | FormValuesPhone>();
    const onSubmit: SubmitHandler<FormValuesEmail | FormValuesPhone> = data => console.log(data);

    return (
        <>
            <ul className={styles.variants_picker}>
                <li onClick={() => setPhase(prev => prev = 'phone')} className={phase === 'phone' ? styles.li_active : styles.li}>
                    По номеру телефона
                </li>
                <li onClick={() => setPhase('email')} className={phase === 'email' ? styles.li_active : styles.li}>
                    По почте
                </li>
            </ul>
            {phase === 'email' ?
                <div className={styles.form_container}>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <input type="submit" value='Войти' className={styles.submit} />
                        <div className={styles.register}>
                            <span className={styles.text}>
                                Еще нет аккаунта?
                            </span>
                            <span className={styles.register_action} onClick={props}>
                                Зарегистрируйтесь!
                            </span>
                        </div>
                    </form>
                </div>
                :
                phase === 'phone' ?
                    <div className={styles.form_container}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputMask
                                type='phone'
                                mask="+7(999) 999-99-99"
                                maskChar="_"
                                placeholder='Номер'
                                {...register("phone")} />
                            <input
                                type='password'
                                {...register("password")}
                                placeholder='Пароль'
                                autoComplete="current-password"
                                required
                            />
                            <input type="submit" value='Войти' className={styles.submit} />
                            <div className={styles.register}>
                                <span className={styles.text}>
                                    Еще нет аккаунта?
                                </span>
                                <span className={styles.register_action} onClick={props}>
                                    Зарегистрируйтесь!
                                </span>
                            </div>
                        </form>
                    </div>
                    :
                    <div className={styles.registration_container}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputMask
                                type='phone'
                                mask="+7(999) 999-99-99"
                                maskChar="_"
                                placeholder='Номер'
                                {...register("phone")} />
                            <input
                                type='password'
                                {...register("password")}
                                placeholder='Пароль'
                                autoComplete="current-password"
                                required
                            />
                            <input type="submit" value='Войти' className={styles.submit} />
                            <div className={styles.register}>
                                <span className={styles.text}>
                                    Еще нет аккаунта?
                                </span>
                                <span className={styles.register_action} onClick={props}>
                                    Зарегистрируйтесь!
                                </span>
                            </div>
                        </form>
                    </div>
            }
        </>);

}