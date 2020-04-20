import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import { gettableData } from './actions';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Dashboard extends Component {
    componentDidMount() {
        this.props.gettableData();
    }

    render() {
        const columnDefs = [{
            headerName: "ID", field: "id"
            }, {
                headerName: "Title", field: "title"
            }, {
                headerName: "Status", field: "completed", sortable: true
            }]
            const {
                tableData,
                isTableDataFetching,
            } = this.props;
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '610px'
                }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={tableData}>
                </AgGridReact>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardReducer }) => (dashboardReducer);

const mapDispatchToProps = ({ gettableData });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
