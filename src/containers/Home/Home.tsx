import * as React from 'react';
import { PlayerForm } from '../../components/Forms/PlayerForm';
import TablePlayers from '../../components/TablePlayers';
import { Props } from './';

const { useEffect } = React;
const Home = ({
    players,
    fetchingPlayers,
    error,
    setPlayers,
    positions,
    setFilterPlayers
}: Props) => {
    useEffect(() => {
        if (fetchingPlayers === null) {
            setPlayers();
        }
    });
    return (
        <div>
            {(fetchingPlayers || fetchingPlayers == null) ?
                <div>Loading ...</div>
                :
                error ?
                    <div style={{ color: 'red' }}>{error}</div>
                    :
                    <React.Fragment>
                        <PlayerForm
                            positions={positions}
                            setFilterPlayers={setFilterPlayers}
                        />
                        <TablePlayers players={players} />
                    </React.Fragment>
            }
        </div>
    );
}

export default Home;
