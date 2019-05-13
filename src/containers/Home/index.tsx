import Home from './Home';
import { setPlayers } from '../../store/players/actions';
import { IPlayer } from '../../store/players/types';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { selectotPlayers } from '../../store/selectors/player';

interface DispatchProps {
    setPlayers: () => void,
}

interface StateProps {
    players: Array<IPlayer>,
    fetchingPlayers: boolean,
    error: null | string
}
export type Props = StateProps & DispatchProps;


export function mapStateToProps(state: ApplicationState) {
    return {
        players: selectotPlayers(state),
        fetchingPlayers: state.players.isFetching,
        error: state.players.error,
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
        setPlayers: () => dispatch(setPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);