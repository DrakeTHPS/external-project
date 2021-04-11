import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from 'classnames';
import CatalogManagement from './catalog-management';
import DealersManagement from './dealers-management';
import DetailsManagement from './details-management';
import OrderManagement from './order-management';
import PriceHistory from './price-history';
import RolesManagement from './roles-management';
import UsersManagement from './users-management';

const Management =()=>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <div className={"catalog"}>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Поставщики
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Детали
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Каталог
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        История цен
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}
                    >
                        Заказы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => { toggle('6'); }}
                    >
                        Пользователи
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '7' })}
                        onClick={() => { toggle('7'); }}
                    >
                        Роли
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <DealersManagement/>
                </TabPane>
                <TabPane tabId="2">
                    <DetailsManagement/>
                </TabPane>
                <TabPane tabId="3">
                    <CatalogManagement/>
                </TabPane>
                <TabPane tabId="4">
                    <PriceHistory/>
                </TabPane>
                <TabPane tabId="5">
                    <OrderManagement/>
                </TabPane>
                <TabPane tabId="6">
                    <UsersManagement/>
                </TabPane>
                <TabPane tabId="7">
                    <RolesManagement/>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Management;