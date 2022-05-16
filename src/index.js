import React from 'react'
import DataTable from 'react-data-table-component'
// import styles from './styles.module.css'

export const RezList = ({columns, data }) => {
  return <DataTable
            columns={columns}
            data={data}
        />
}

export const RezTab = () => {
  return <div>Tabs</div>
}

export const RezMenu = () => {
  return <div>Menu</div>
}
export const RezForm = () => {
  return <div>Form</div>
}