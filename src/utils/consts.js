import DealersManagement from "../components/front-page/management/dealers-management";
import DetailsManagement from "../components/front-page/management/details-management";
import CatalogManagement from "../components/front-page/management/catalog-management";
import PriceHistory from "../components/front-page/management/price-history";
import OrderManagement from "../components/front-page/management/order-management";
import UsersManagement from "../components/front-page/management/users-management";

export const ADMIN = 'ROLE_ADMIN';
export const PURCHASE = 'ROLE_PURCHASE';
export const SUPPLY = 'ROLE_SUPPLY';
// TODO: найти как сделать нормально
export const MANAGEMENT = [
    {name: 'Поставщики', func: {DealersManagement}},
    {name: 'Детали', func: {DetailsManagement}},
    {name: 'Каталог', func: {CatalogManagement}},
    {name: 'История цен', func: {PriceHistory}},
    {name: 'Заказы', func: {OrderManagement}},
    {name: 'Пользователи', func: {UsersManagement}}
];
export const TABS = {
    'ROLE_ADMIN' : [1, 2, 3, 4, 5, 6],
    'ROLE_PURCHASE' : [3, 5],
    'ROLE_SUPPLY' : [1, 2, 3, 4],
}