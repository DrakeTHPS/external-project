import React from 'react';
import styles from './front-page.module.css';
import {Route, useHistory} from "react-router";
import Registry from "./registry/registry";
import Catalog from "./catalog/catalog";
import Management from "./management/management";
import Checkout from "./checkout/checkout";


const FrontPage = () => {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4>СУДИЗ</h4>
                <div className={styles.navigation}>
                    <button onClick={()=>history.push("/main/registry")}>Реестр закупок</button>
                    <button onClick={()=>history.push("/main/catalog")}>Каталог</button>
                    <button onClick={()=>history.push("/main/management")}>Управление</button>
                    <button onClick={()=>history.push("/")}>Выйти</button>
                </div>
            </div>

            <div className={styles.contentArea}>
                <Route path={"/main/registry"} component={Registry}/>
                <Route path={"/main/catalog"} component={Catalog}/>
                <Route path={"/main/management"} component={Management}/>
                <Route path={"/main/checkout"} component={Checkout}/>
            </div>
        </div>
    )
}

export default FrontPage;