import * as React from 'react';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import {
    WrapperTable
} from './style';
import { Props } from './';

declare var require: (moduleId: string) => any;
let TableResponsive = require("react-super-responsive-table");
const { Table, Thead, Tbody, Tr, Th, Td } = TableResponsive;

const noResult = [
    {name:'-', position:'-', nationality:'-', age:'-'}
];

const TablePlayers = ({players}: Props) => {

    const data = players.length === 0 ? noResult : players;
    return (
        <WrapperTable>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Player</Th>
                        <Th>Position</Th>
                        <Th>Nationality</Th>
                        <Th>Age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item , index ) => {
                        const { name, position, nationality, age } = item;
                        return(
                            <Tr key={index}>  
                                <Td>{name}</Td>
                                <Td>{position}</Td>
                                <Td>{nationality}</Td>
                                <Td>{age}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </WrapperTable>
    );
}

export default TablePlayers;
