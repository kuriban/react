import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonDefault from './src/components/ButtonDefault';
import TextFieldDefault from './src/components/TextFieldDefault';

const App = () => (
    <MuiThemeProvider>
        <div>
            <TextFieldDefault text="Login"/><br />
            <TextFieldDefault text="Password"/><br />
            <ButtonDefault text="Submit" action="submit"/>
            <ButtonDefault text="Reset" action="reset" />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);



