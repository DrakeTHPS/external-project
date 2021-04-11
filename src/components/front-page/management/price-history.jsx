import React, { useState } from 'react';
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

const rows = [{
    detail: "148A840",
    dealer: "ПНППК",
    date: "2021-01-02 11:40",
    oldPrice: 1400,
    newPrice: 1580,
},{
    detail: "833A440",
    dealer: "Завод \"Гладиолус\"",
    date: "2020-10-04 14:30",
    oldPrice: 500,
    newPrice: 480,
}];

export default () => {
    const [columns] = useState([
        {name: 'detail', title: 'Артикул'},
        {name: 'dealer', title: "Поставщик"},
        {name: 'date', title: 'Дата'},
        {name: 'oldPrice', title: 'Старая цена'},
        {name: 'newPrice', title: 'Новая цена'},
    ]);

    return (
        <div className="card">
            <Grid
                rows={rows}
                columns={columns}
            >
                <SearchState/>
                <IntegratedFiltering />
                <Table />
                <TableHeaderRow />
                <Toolbar />
                <SearchPanel messages={{searchPlaceholder:"Поиск..."}}/>
            </Grid>
        </div>
    );
};
