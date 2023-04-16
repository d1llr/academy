import styles from './FeedBack.module.scss';



const FeedBack = () => {
    return (
        <section className={styles.feedback_wrapper}>
            <h1>
                Остались вопросы?
            </h1>
            <h2>
                Оставьте свои данные и мы свяжемся с вами в ближайшее время
            </h2>
            <div className={styles.submit_container}>
                <form>
                    <input type='text' name='name' placeholder='Ваше имя'/>
                    <input type='text' name='phone' placeholder='Телефон'/>
                </form>
                <button>
                    Отправить
                </button>
            </div>

        </section>
    );
}

export default FeedBack;