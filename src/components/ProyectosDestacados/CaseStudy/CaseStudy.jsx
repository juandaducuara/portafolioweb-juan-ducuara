import React from 'react'
import './CaseStudy.css'

const CaseStudy = ({ data }) => {
  return (
    <article className="case-study">
      <span className="case-badge">
        <span className="material-icons" aria-hidden="true">lock</span>
        {data.badge}
      </span>
      <h3>{data.title}</h3>
      <p className="case-context">{data.context}</p>

      <div className="case-story">
        <div>
          <h4>{data.problemTitle}</h4>
          <p>{data.problem}</p>
        </div>
        <div>
          <h4>{data.solutionTitle}</h4>
          <p>{data.solution}</p>
        </div>
      </div>

      <ul className="case-metrics">
        {data.metrics.map((metric) => (
          <li key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </li>
        ))}
      </ul>

      <h4>{data.architectureTitle}</h4>
      <div className="case-architecture">
        <ol className="arch-flow">
          {data.architecture.map((layer) => (
            <li key={layer.name}>
              <strong>{layer.name}</strong>
              <span>{layer.detail}</span>
            </li>
          ))}
        </ol>
        <ul className="chip-list arch-integrations">
          {data.integrations.map((name) => (
            <li className="chip" key={name}>{name}</li>
          ))}
        </ul>
      </div>

      <h4>{data.decisionsTitle}</h4>
      <ul className="case-decisions">
        {data.decisions.map((decision) => (
          <li key={decision.title}>
            <strong>{decision.title}</strong>
            <p>{decision.text}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default CaseStudy
