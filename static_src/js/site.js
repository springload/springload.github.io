import React from 'react';
import ReactDOM from 'react-dom';
import { querySelectArray } from './utils/index';
import Main from './components/Main';
import Icon from 'react-svg-icon';
import LatestProjectList from './components/LatestProjectList';
import request from 'superagent';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';



// Retreiving all of the springload github repos as json file
var url = 'https://api.github.com/users/springload/repos?sort=pushed';

request
    .get(url)
    .end(function(err, res){
        if (err) {
            console.log(err);
        } else {
            const projects = res.body;

            ReactDOM.render(
                <LatestProjectList projects={projects} />,
                document.querySelector('[data-latest-projects]')
            );
        }
    });

ReactDOM.render(
    <Main />,
    document.getElementById('main')
);


const iconContainer = querySelectArray('[data-icon]');
console.log(iconContainer);
iconContainer.forEach(elm => {
    ReactDOM.render(
        <Icon name='tick'/>,
        elm
    );
})
