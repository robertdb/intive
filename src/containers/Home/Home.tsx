import * as React from 'react';
import { PlayerForm } from '../../components/Forms/PlayerForm';
import TablePlayers from '../../components/TablePlayers';
import { Props } from './';

const { useEffect } = React;
const Home = ({
    players,
    fetchingPlayers,
    error,
    setPlayers
}: Props) => {
    useEffect(() => {
        if (fetchingPlayers === null) {
            setPlayers();
        }
    });
    console.log(players);
    return (
        <div>
            <PlayerForm positions={[{ value: "striker", content: "Striker" }]} />
            <TablePlayers />
            {(fetchingPlayers || fetchingPlayers == null) ?
                <div>Loading ...</div>
                :
                error ?
                    <div style={{ color: 'red' }}>{error}</div>
                    :
                    players.length == 0 ?
                        <div>No result ...</div>
                        :
                        <div>Success!</div>
            }
        </div>
    );
}

export default Home;
