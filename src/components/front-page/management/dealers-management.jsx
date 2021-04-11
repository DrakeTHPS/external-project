import React, { useState } from 'react';
import { EditingState } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const rows = [{
    name: "ПНППК",
    address: "Ленина, 17",
    phoneNumber: "2-999-999"
},{
    name: "Завод \"Гладиолус\"",
    address: "Куйбышева, 238 ",
    phoneNumber: "8-800-555-35-35"
}];

const getRowId = row => row.id;

export default () => {
    const [columns] = useState([
        { name: 'name', title: 'Название' },
        { name: 'address', title: 'Адрес' },
        { name: 'phoneNumber', title: 'Номер телефона' },
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
                    onCommitChanges={""}
                />
                <Table />
                <TableHeaderRow />
                <TableEditRow />
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