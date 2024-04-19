import React from 'react';
import { initialData } from '../../statics/data';
import useCalculate from './useCalculate';
import { Table } from "@mantine/core";


const Flavanoids:React.FC = () => {
    const data={
        data:initialData,
        property:"Flavanoids"
    }
    //  using a custom hook for clean and maintanable data
    const { loading, resultantData }=useCalculate(data)

    const rows = <>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Flavonoids Mean</Table.Th>
          {Object.values(resultantData).map((stats, index)=>(
            <Table.Td key={index}>{stats.mean}</Table.Td>
          ))} 
    </Table.Tr>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Flavonoids Median</Table.Th>
          {Object.values(resultantData).map((stats, index)=>(
            <Table.Td key={index}>{stats.median}</Table.Td>
          ))} 
    </Table.Tr>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Flavonoids Mode</Table.Th>
          {Object.values(resultantData).map((stats, index)=>(
            <Table.Td key={index}>{stats.mode}</Table.Td>
          ))} 
    </Table.Tr>
     </>
        
        

  return (
    <>
    <div style={{width:"70vw",marginTop:"10vh", textAlign:"center"}}>
    {loading?"Loading..": 
        <Table   striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr >
            <Table.Th style={{ textAlign: "center" }}>Measure</Table.Th>
            {Object.keys(resultantData).map((item)=><Table.Th style={{ textAlign: "center" }} key={item}>{item}</Table.Th>)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    }
    </div>
    
    </>
  )
}

export default Flavanoids