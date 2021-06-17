import React, {useEffect, useState} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {addSupply, deleteSupply, editSupply, getSupplies} from "../../../store/actions/supplies";
import {connect} from "react-redux";

const rows = []; //TODO: подключить redux

const getRowId = row => row.id;

const SupplyManagement = (props) => {
    const [columns] = useState([
        {name: 'detail', title: 'Артикул'},
        {name: 'dealer', title: "Поставщик"},
        {name: 'date', title: 'Дата'},
        {name: 'amount', title: 'Кол-во'},
        {name: 'totalPrice', title: 'Итого'},
    ]);


    useEffect(() => {
        props.getSupplies();
    }, []);

    const commitChanges = ({ added, changed, deleted }) => {
        if (added) {
            let addedRow ={...added[0]};
            props.addSupply(addedRow);
        }
        if (changed) {
            props.dealers.forEach(row =>{
                if(changed[row.id]){
                    let editedRawRow = {...row, ...changed[row.id]};
                    props.editSupply(editedRawRow);
                }
            })
        }
        if (deleted) {
            props.deleteSupply(deleted[0]);
        }
    };
    

    return (
        <div className="card">
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                <EditingState
                    onCommitChanges={commitChanges}
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


const mapStateToProps = state => ({
    supplies: state.supplies.supplies,
})

const mapDispatchToProps = dispatch => {
    return {
        getSupplies: () => dispatch(getSupplies()),
        addSupply: (dealer) => dispatch(addSupply(dealer)),
        editSupply: (dealer) => dispatch(editSupply(dealer)),
        deleteSupply: (dealer) => dispatch(deleteSupply(dealer)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplyManagement);