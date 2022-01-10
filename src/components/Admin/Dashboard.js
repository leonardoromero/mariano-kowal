import React from 'react'
import { SetNewShow } from './SetNewShow'
import { Table } from './Table'

export const Dashboard = () => {

    return (
        <div className='h-screen flex justify-center items-center'>
            <SetNewShow/>
            <Table/>
        </div>
    )
}
