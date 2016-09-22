import React from 'react'
import ReactDOM from 'react-dom';
import { querySelectArray } from './utils/index';
import Main from './components/Main';
import Icons from './components/Icon';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';

ReactDOM.render(
    <Main />,
    document.getElementById('main')
);


const iconContainer = querySelectArray('[data-icon]');
console.log(iconContainer);
iconContainer.map(elm => {
    ReactDOM.render(
        <Icons name='tick'/>,
        elm
    );
})
