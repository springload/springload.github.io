import React from 'react'
import ReactDOM from 'react-dom';
import Main from './components/Main';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';

ReactDOM.render(
    <Main />,
    document.getElementById('main')
);
