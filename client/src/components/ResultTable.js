import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        });
    });

  return (
    <div>
      <h1 style={{color : "#fff"}}>Previous Users' Results :</h1>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Username</td>
                    <td>Attempts</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  );
};
