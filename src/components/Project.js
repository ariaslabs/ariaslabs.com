import React from 'react'
import githubIcon from '../assets/images/GitHub-Mark-Light-32px.png'

export default function Project({projectData}) {
  return (
    <div className="mt-3">
      <div className="mb-4">
        <h4>{projectData.name} {projectData.company !== "" ? <span>{`- ${projectData.company}`}</span> : null}</h4>
        <div>
          <p>{projectData.description}</p>
          <ul>
            {projectData.techs.map(item => {
              return <li>{item}</li>
            })}
          </ul>
          {projectData.url === "" && projectData.github_url === "" ? <small>Source Code Not Available.</small> : null}
          {
            projectData.url != "" ? 
            <a href={projectData.url}>{projectData.name}</a> : null
          }
          <br />
          {
            projectData.github_url != "" ?
            <a href={projectData.github_url}>Source Code</a> : null
          }
        </div>
      </div>
    </div>
  )
}