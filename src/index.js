import React from 'react'
import DataTable from 'react-data-table-component'
// import styles from './styles.module.css'

export const RezList = ({columns,data }) => {
  return <DataTable
            columns={columns}
            data={data}
        />
}
