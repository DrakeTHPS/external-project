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
    role: "Аdmin",
    note: "Админ",
}, {
    role: "Supply Specialist",
    note: "Специалист по снабжению",
}, {
    role: "Procurement specialist",
    note: "Специалист по закупкам",
}];

const getRowId = row => row.id;

export default () => {
    const [columns] = useState([
        { name: 'role', title: 'Роль' },
        { name: 'note', title: 'Примечание' },
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