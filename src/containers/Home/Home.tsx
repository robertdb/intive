import * as React from 'react';
import { PlayerForm } from '../../components/Forms/PlayerForm';
import TablePlayers from '../../components/TablePlayers';
import { Props } from './';
import { Container, Loading, ErrorServer, ErrorMessage } from './style';
import Lottie from 'react-lottie';
import * as loading from '../../assets/lotties/data.json';
import * as close from '../../assets/lotties/close.json';

const { useEffect } = React;
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const defaultOptionsError = {
    loop: true,
    autoplay: true,
    animationData: close,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

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
        <Container>
            {(fetchingPlayers || fetchingPlayers == null) ?
                <Loading>
                    <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                    />
                </Loading>
                :
                error ?
                    <ErrorServer>
                        <Lottie
                            options={defaultOptionsError}
                            height={300}
                            width={300}
                        />
                        <ErrorMessage>{error}</ErrorMessage>
                    </ErrorServer>
                    :
                    <React.Fragment>
                        <PlayerForm
                            positions={positions}
                            setFilterPlayers={setFilterPlayers}
                        />
                        <TablePlayers players={players} />
                    </React.Fragment>
            }
        </Container>
    );
}

export default Home;
