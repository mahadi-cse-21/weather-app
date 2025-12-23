import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp  from './components/WeatherApp';
import '../css/app.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<WeatherApp />);
