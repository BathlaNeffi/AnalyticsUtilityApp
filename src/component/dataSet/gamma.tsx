import React, { useEffect, useState } from 'react';
import { initialData , OriginalDataType} from '../../statics/data';
import useCalculate from './useCalculate';
import { Table } from "@mantine/core";


const Gamma:React.FC = () => {
    const [newData, setNewData] = useState<OriginalDataType[]>([]);

    // First created a key name gamma in the dataset so that we can get mean median mode of that
    useEffect(() => {
        const populatedData = initialData.map(data => ({
          ...data,
          gamma: (parseFloat((data.Ash as string))*parseFloat((data.Hue as string)))/ parseFloat((data.Magnesium as string))
        }));
        setNewData(populatedData);

      }, []);

    const data={
        data:newData,
        property:"gamma"
    }

    //  using a custom hook for clean and maintanable data
    const { loading, resultantData }=useCalculate(data)


    const rows = <>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Gamma Mean</Table.Th>
          {Object.values(resultantData).map((stats, index)=>(
            <Table.Td key={index}>{stats.mean}</Table.Td>
          ))} 
    </Table.Tr>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Gamma Median</Table.Th>
          {Object.values(resultantData).map((stats, index)=>(
            <Table.Td key={index}>{stats.median}</Table.Td>
          ))} 
    </Table.Tr>
    <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Gamma Mode</Table.Th>
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

export default Gamma