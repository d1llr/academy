import { useState } from 'react';
import H1 from '../../../UniversalComponents/H1/H1.tsx';
import Item from './Item';
import styles from './Question.module.scss';


const Questions = () => {
    const [active, setActive] = useState(false)


    const data = [
        {
            'id': '1',
            'question': 'Сколько длится обучение?',
            'answer': 'Каждая дисциплина рассчитана на разное количество занятий. Для видимого эффекта мы рекомендуем придерживаться наших советов по поводу продолжительности курса. Точный ответ можно получить в разделе интересующей дисциплины.'
        },
        {
            'id': '2',
            'question': 'По окончании курса  я получу сертификат?',
            'answer': 'Каждая дисциплина рассчитана на разное количество занятий. Для видимого эффекта мы рекомендуем придерживаться наших советов по поводу продолжительности курса. Точный ответ можно получить в разделе интересующей дисциплины.'
        },
        {
            'id': '3',
            'question': 'Помогаете ли вы с трудоустройством?',
            'answer': 'Каждая дисциплина рассчитана на разное количество занятий. Для видимого эффекта мы рекомендуем придерживаться наших советов по поводу продолжительности курса. Точный ответ можно получить в разделе интересующей дисциплины.'
        },
        {
            'id': '4',
            'question': 'Заключаем ли мы договор?',
            'answer': 'Каждая дисциплина рассчитана на разное количество занятий. Для видимого эффекта мы рекомендуем придерживаться наших советов по поводу продолжительности курса. Точный ответ можно получить в разделе интересующей дисциплины.'
        },
    ]

    return (
        <section className={styles.question_container}>
            <h1 className ={styles.h1}>Часто задаваемые вопросы</h1>
            <div className={styles.question_wrapper}>
                {data.map(item => {
                    return <Item answer={item.answer} question = {item.question}/>
                })}

            </div>
        </section>
    );
}

export default Questions;