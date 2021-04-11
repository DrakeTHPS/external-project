import React from "react";
import styles from './checkout.module.css';
import {useHistory} from "react-router";


const Checkout = () => {
    const history = useHistory();
    return (
        <div className="catalog">
            <div className={styles.receipt}>
                <h3>Чек</h3>
                <div className={styles.row}>
                    <span>Наименование</span> <span>Сумма</span>
                </div>
                <div className={styles.row}>
                    <span>148А840 Коленчатый вал </span> <span>1.0x480</span> <span>480</span>
                </div>
                <div className={styles.row}>
                    <span>Всего</span> <span>480</span>
                </div>
                <button className={"submit_button"} onClick={()=>history.push("/main/catalog")}>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Checkout;