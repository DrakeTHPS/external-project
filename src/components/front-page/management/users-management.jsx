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
    login: "DrakeTHPS",
    password: "$2y$12$MIJtaV1.pSCDOf512cHKcu7PS8XUQmEoRNJbkCZGKSPcxSOm.VZKK",
    name: "Якин Н. Н.",
    role: "Аdmin",
    note: "Админ",
}, {
    login: "mp3ver",
    password: "$2y$12$MIJtaV1.pSCDOf512cHKcu7PS8XUQmEoRNJbkCZGKSPcxSOm.VZKK",
    name: "Чернов П. К.",
    role: "Supply Specialist",
    note: "Специалист по снабжению",
}, {
    login: "Dasem",
    password: "$2y$12$kfJNVUCoM4SLFkaCHozh4.xo2cSZmszTWTwCN5VH/VF4o3b33y4c2",
    name: "Андрей А. В.",
    role: "Procurement specialist",
    note: "Специалист по закупкам",
}];

const getRowId = row => row.id;

export default () => {
    const [columns] = useState([
        {name: 'login', title: 'Логин'},
        {name: 'password', title: 'Пароль'},
        {name: 'name', title: 'ФИО'},
        {name: 'role', title: 'Роль'},
        {name: 'note', title: 'Примечание'},
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