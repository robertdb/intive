import * as React from 'react';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import {
    WrapperTable
} from './style';

declare var require: (moduleId: string) => any;
let TableResponsive = require("react-super-responsive-table");
const { Table, Thead, Tbody, Tr, Th, Td } = TableResponsive;

class TablePlayers extends React.Component {
    public render() {
        return (
            <WrapperTable>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Player</Th>
                            <Th>Position</Th>
                            <Th>Team</Th>
                            <Th>Age</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Tablescon</Td>
                            <Td>9 April 2019</Td>
                            <Td>East Annex</Td>
                            <Td>Eaa22st Annex</Td>
                        </Tr>
                        <Tr>
                            <Td>Capstone Data</Td>
                            <Td>19 May 2019</Td>
                            <Td>205 Gorgas</Td>
                            <Td>Easafdsft Annex</Td>
                        </Tr>
                        <Tr>
                            <Td>Tuscaloosa D3</Td>
                            <Td>29 June 2019</Td>
                            <Td>Github</Td>
                            <Td>Gitasdsdhub</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </WrapperTable>
        );
    }
}

export default TablePlayers;
