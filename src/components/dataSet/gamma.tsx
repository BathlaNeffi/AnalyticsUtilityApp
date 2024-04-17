import React, { useState, useEffect } from "react";
import { Table } from "@mantine/core";
import datas from "../../Wine-Data.json";
import useCalculate from "./useCalculate";

interface WineData {
  Alcohol: number;
  Ash: number;
  Hue: number;
  Magnesium: number;
}

const Gamma: React.FC = () => {
  const [newData, setNewData] = useState<WineData[]>([]);

  useEffect(() => {
    const populatedData: any = datas.map(data => ({
      ...data,
      gamma: parseFloat(((data.Ash as number * data.Hue as number) / data.Magnesium).toFixed(3))
    }));
    setNewData(populatedData);
  }, []);

  const { loading, resultantData } = useCalculate(newData, "gamma");

  const rows = (
    <>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Gamma Mean</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.mean}</Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Gamma Median</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.median}</Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Gamma Mode</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.mode}</Table.Td>
        ))}
      </Table.Tr>
    </>
  );

  return (
    <>
      <div style={{ width: "70vw", marginTop: "10vh", textAlign: "center" }}>
        {loading ? "Loading.." :
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ textAlign: "center" }}>Measure</Table.Th>
                {Object.keys(resultantData).map((item) => <Table.Th style={{ textAlign: "center" }} key={item}>{item}</Table.Th>)}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        }
      </div>
    </>
  );
};

export default Gamma;
