import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Router from './router';

const App = () => <Router />;

render(<App />, document.getElementById('root'));
