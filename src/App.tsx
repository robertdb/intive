import * as React from 'react';
import { PlayerForm } from './components/Forms/PlayerForm';

class App extends React.Component {
  public render() {
    return (
      <div>
        <PlayerForm positions={[{ value: "striker", content: "Striker" }]} />
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
