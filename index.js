import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonDefault from './src/components/ButtonDefault';
import TextField from './src/components/TextFieldDefault';

import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => (
    <MuiThemeProvider>
        <TextField />
        <ButtonDefault text="Submit"/>
        <ButtonDefault text="Reset"/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

injectTapEventPlugin();