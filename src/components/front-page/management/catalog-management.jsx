import React, {useState} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const rows = [{
    dealer: "Завод \"Градиолус\"",
    vendorCode: "833A440",
    price: "480"
}, {
    dealer: "ПНППК",
    vendorCode: "148A840",
    price: "1580"
}];

const getRowId = row => row.id;

export default () => {
    const [columns] = useState([
        {name: 'dealer', title: 'Поставщик'},
        {name: 'vendorCode', title: 'Артикул'},
        {name: 'price', title: 'Цена'},
    ]);


    // const commitChanges = ({ added, changed, deleted }) => {
    //     let changedRows;
    //     if (added) {
    //         const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
    //         changedRows = [
    //             ...rows,
    //             ...added.map((row, index) => ({
    //                 id: startingAddedId + index,
    //                 ...row,
    //             })),
    //         ];
    //     }
    //     if (changed) {
    //         changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    //     }
    //     if (deleted) {
    //         const deletedSet = new Set(deleted);
    //         changedRows = rows.filter(row => !deletedSet.has(row.id));
    //     }
    //     setRows(changedRows);
    // };

    return (
        <div className="card">
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                <EditingState
                />
                <Table/>
                <TableHeaderRow/>
                <TableEditRow/>
                <TableEditColumn
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                    width = {"200px"}
                    messages = {{
                        addCommand:"Добавить",
                        editCommand:"Изменить",
                        deleteCommand:"Удалить",
                        commitCommand: "Сохранить",
                        cancelCommand: "Отменить",
                    }}
                />
            </Grid>
        </div>
    );
};