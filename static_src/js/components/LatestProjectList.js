import React from 'react';

const LatestProjectList = React.createClass({
    propTypes: {
        projects: React.PropTypes.array.isRequired,
    },

    render() {
        var project = this.props.projects.map((project, index) => {
            return (
                <li className="project" key={index}>
                    <a href={project.html_url}>{project.full_name} - {project.stargazers_count}</a>
                </li>
            );
        })
        return (
            <div>
                <h2>Latest projects</h2>
                <ul>
                    {project}
                </ul>
            </div>
        );
    },
});

module.exports = LatestProjectList;
