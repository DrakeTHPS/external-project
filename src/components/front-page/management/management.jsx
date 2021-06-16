import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from 'classnames';
import CatalogManagement from './catalog-management';
import DealersManagement from './dealers-management';
import DetailsManagement from './details-management';
import OrderManagement from './order-management';
import PriceHistory from './price-history';
import UsersManagement from './users-management';
import {ADMIN, PURCHASE, SUPPLY} from "../../../utils/consts";
import {connect} from "react-redux";
import {role} from "../../../utils/utils";

const ROLE = role();

const Management = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    

    return (
        <div className={"catalog"}>
            <Nav tabs>
                {(ROLE === ADMIN || ROLE === SUPPLY) && <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        Поставщики
                    </NavLink>
                </NavItem>}
                {(ROLE === ADMIN || ROLE === SUPPLY) && <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        Детали
                    </NavLink>
                </NavItem>}
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '3'})}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        Каталог
                    </NavLink>
                </NavItem>
                {(ROLE === ADMIN || ROLE === SUPPLY) && <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '4'})}
                        onClick={() => {
                            toggle('4');
                        }}
                    >
                        История цен
                    </NavLink>
                </NavItem>}
                {(ROLE === ADMIN || ROLE === PURCHASE) && <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '5'})}
                        onClick={() => {
                            toggle('5');
                        }}
                    >
                        Заказы
                    </NavLink>
                </NavItem>}
                {ROLE === ADMIN && <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '6'})}
                        onClick={() => {
                            toggle('6');
                        }}
                    >
                        Пользователи
                    </NavLink>
                </NavItem>}
            </Nav>
            <TabContent activeTab={activeTab}>
                {(ROLE === ADMIN || ROLE === SUPPLY) && <TabPane tabId="1">
                    <DealersManagement/>
                </TabPane>}
                {(ROLE === ADMIN || ROLE === SUPPLY) && <TabPane tabId="2">
                    <DetailsManagement/>
                </TabPane>}
                <TabPane tabId="3">
                    <CatalogManagement/>
                </TabPane>
                {(ROLE === ADMIN || ROLE === SUPPLY) && <TabPane tabId="4">
                    <PriceHistory/>
                </TabPane>}
                {(ROLE === ADMIN || ROLE === PURCHASE) && <TabPane tabId="5">
                    <OrderManagement/>
                </TabPane>}
                {ROLE === ADMIN && <TabPane tabId="6">
                    <UsersManagement/>
                </TabPane>}
            </TabContent>
        </div>
    )
}

const mapStateToProps = state => ({
    role: state.auth.role
})

export default connect(mapStateToProps)(Management);