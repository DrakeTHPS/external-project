import React, {useState} from 'react';
import {
    SearchState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    Toolbar,
    SearchPanel,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const generateRows = [{
    vendorCode: "833A440",
    deviceName: "Трубопровод",
    dealer: "Завод \"Градиолус\"",
    amount: 100,
    totalPrice: 48000,
    date: "2020-12-12 15:30"
}, {
    vendorCode: "148A840",
    dealer: "ПНППК",
    deviceName: "Коленчатый вал",
    amount: 50,
    totalPrice: 79000,
    date: "2021-01-01 11:40"
}, {
    vendorCode: "148A840",
    dealer: "ПНППК",
    deviceName: "Коленчатый вал",
    amount: 50,
    totalPrice: 79000,
    date: "2021-02-02 11:40"
}];

const Registry = () => {
    const [columns] = useState([
        {name: 'vendorCode', title: 'Артикул'},
        {name: 'deviceName', title: 'Наименование'},
        {name: 'dealer', title: 'Поставщик'},
        {name: 'amount', title: 'Кол-во'},
        {name: 'totalPrice', title: 'Итого'},
        {name: 'date', title: 'Дата'},
    ]);
    const [rows] = useState(generateRows);

    return (
        <div className="card" style={{margin: "1%"}}>
            <Grid
                rows={rows}
                columns={columns}
            >
                <SearchState/>
                <IntegratedFiltering/>
                <Table/>
                <TableHeaderRow/>
                <Toolbar/>
                <SearchPanel messages={{searchPlaceholder:"Поиск..."}}/>
            </Grid>
        </div>
    );
};

export default Registry;