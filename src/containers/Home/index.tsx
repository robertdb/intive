import Home from './Home';
import { setPlayers } from '../../store/players/actions';
import { setFilterPlayers } from '../../store/filters/actions';
import { IFilterPlayer } from '../../store/filters/types';
import { IPlayer } from '../../store/players/types';
import { PositionOption } from '../../store/positions/types';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { selectotPlayers } from '../../store/selectors/player';

interface DispatchProps {
    setPlayers: () => void,
    setFilterPlayers: (filterPlayers: IFilterPlayer) => void
}

interface StateProps {
    players: Array<IPlayer>,
    fetchingPlayers: boolean,
    error: null | string,
    positions: Array<PositionOption>
}
export type Props = StateProps & DispatchProps;


export function mapStateToProps(state: ApplicationState) {
    return {
        players: selectotPlayers(state),
        fetchingPlayers: state.players.isFetching,
        error: state.players.error,
        positions: state.positions.positionPlayers
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
        setPlayers: () => dispatch(setPlayers()),
        setFilterPlayers: (filterPlayers: IFilterPlayer) => dispatch(setFilterPlayers(filterPlayers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);