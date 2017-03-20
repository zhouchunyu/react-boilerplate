require('./styles/main.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import AppState from './stores/AppState'
import Mock from 'mockjs'

Mock.mock(/\/domain\/list\.json/, {
  'name' : '[@name](/user/name)()',
  'age|1-100': 100,
  'color' : '[@color](/user/color)'
});

const appState = new AppState();

ReactDOM.render(
  <AppContainer>
    <App store={appState} />
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App store={appState} />
      </AppContainer>
      ,
      document.getElementById('root')
    );
  });
}