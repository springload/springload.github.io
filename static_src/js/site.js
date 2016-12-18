import React from 'react';
import ReactDOM from 'react-dom';
import { querySelectArray } from './utils/index';
import LatestProjectList from './components/LatestProjectList';
import request from 'superagent';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import StreamGraph from './charts/StreamGraph';

// Retreiving all of the springload github repos as json file
const latestProjects = document.querySelector('[data-latest-projects]');

if (latestProjects) {
    request.get('https://api.github.com/users/springload/repos?sort=pushed&per_page=9')
        .end((err, res) => {
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
}

if (document.querySelector('[data-streamgraph]')) {
    StreamGraph(document.querySelector('[data-streamgraph]'))
}
