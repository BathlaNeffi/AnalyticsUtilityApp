import React from "react";
import { Table } from "@mantine/core";
import datas from "../../Wine-Data.json";
import useCalculate from "./useCalculate";

const Flavanoids: React.FC = () => {
  // Used custom hooks for clean and maintainable code
  const { loading, resultantData } = useCalculate(datas, "Flavanoids");

  const rows = (
    <>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Flavonoids Mean</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.mean}</Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Flavonoids Median</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.median}</Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Th style={{ textAlign: "center" }}>Flavonoids Mode</Table.Th>
        {Object.values(resultantData).map((stats: any, index) => (
          <Table.Td key={index}>{stats.mode}</Table.Td>
        ))}
      </Table.Tr>
    </>
  );

  return (
    <>
      <div style={{ width: "70vw", marginTop: "10vh", textAlign: "center" }}>
        {loading ? "Loading.." : (
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr >
                <Table.Th style={{ textAlign: "center" }}>Measure</Table.Th>
                {Object.keys(resultantData).map((item) => <Table.Th style={{ textAlign: "center" }} key={item}>{item}</Table.Th>)}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Flavanoids;
