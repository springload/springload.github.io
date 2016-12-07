import React from 'react';

import Icon from 'react-svg-icon';

const LatestProjectList = React.createClass({
    propTypes: {
        projects: React.PropTypes.array.isRequired,
    },

    render() {
        const { projects } = this.props;

        return (
            <div>
                <h2>Latest projects</h2>
                <div className="grid">
                    {projects.map((project) => (
                        <div key={project.id} className="grid-item projects">
                            <a href={project.homepage || project.html_url}>
                                <h3>{project.name}</h3>
                                <span>
                                    <Icon name="tick"/>
                                    {project.stargazers_count}
                                </span>
                                <p>{project.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
});

module.exports = LatestProjectList;
