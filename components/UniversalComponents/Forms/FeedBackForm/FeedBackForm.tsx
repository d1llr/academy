import React from 'react';
import { useForm, Resolver } from 'react-hook-form';
import styles from './styles.module.scss'


type FormValues = {
  firstName: string;
  phone: string;
  comments: string;
};


const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
        firstName: {
          type: 'required',
          message: 'This is required.',
        },
      }
      : {},
  };
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit(async (data:FormValues) => {
    fetch('/api/contacts', {
      method: 'post',
      body: JSON.stringify(data)
    });
    
  }
  );


  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <span>
        и мы свяжемся с вами в ближайшее время
      </span>
      <input {...register("firstName")} placeholder="Имя" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("phone")} placeholder="Номер телефона" />

      <textarea {...register("comments")} placeholder="Комментарий" />

      <input type="submit" value={'Отправить'} />
    </form>
  );
}