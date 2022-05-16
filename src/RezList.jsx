import React from 'react'
import DataTable from "react-data-table-component"
export const RezList = ({columns, data }) => {
    return <DataTable
              columns={columns}
              data={data}
          />
  }