import * as React from 'react';
import { PlayerForm } from './components/Forms/PlayerForm';
import TablePlayers from './components/TablePlayers';

class App extends React.Component {
  public render() {
    return (
      <div>
        <PlayerForm positions={[{ value: "striker", content: "Striker" }]} />
        <TablePlayers />
      </div>
    );
  }
}

export default App;
