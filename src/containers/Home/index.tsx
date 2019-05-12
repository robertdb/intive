import Home from './Home';
import { setPlayers } from '../../store/players/actions';
import { IPlayer } from '../../store/players/types';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'

interface DispatchProps {
    setPlayers: () => void,
}


interface StateProps {
    players: Array<IPlayer>,
    fetchingPlayers: boolean,
    error: null | string,
    name: string
}
export type Props = StateProps & DispatchProps;


export function mapStateToProps({ players }: ApplicationState) {
    return {
        players: players.players,
        fetchingPlayers: players.isFetching,
        error: players.error,
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
        setPlayers: () => dispatch(setPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);