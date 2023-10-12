export function Telegram({data }) {  
  return (
    <div>
      {data.title && <h1>{data.title}</h1>}
      {data.index && <p>Index: {data.index}</p>}
      {data.timestamp && <p>Timestamp: {data.timestamp}</p>}
      
      {data.body && <div>{data.body.split(/\r\n|\n|\r/).map((line, index) => (<p key={index}>{line}</p>))}</div>}

      {data.coordinates && (
        <div>
          <h2>Coordinates</h2>
          {data.coordinates.ra && <p>Right ascension: {data.coordinates.ra.value} (±{data.coordinates.ra.error} {data.coordinates.ra.error_units})</p>}
          {data.coordinates.dec && <p>Declination: {data.coordinates.dec.value} (±{data.coordinates.dec.error} {data.coordinates.dec.error_units})</p>}
        </div>
      )}
      
      {data.event_datetime && <p>event_datetime: {data.event_datetime}</p>}
      
      {data.magnitude && <p>Magnitude: {data.magnitude}</p>}
      {data.limiting_magnitude && <p>Limiting Magnitude: {data.limiting_magnitude}</p>}
      {data.filter && <p>Filter: {data.filter}</p>}
      
      {data.reporters && data.reporters.length > 0 && (
        <div>
          <h2>Reporters</h2>
          {data.reporters.map((reporter, index, array) => (
            <span key={reporter.organization}>
              
              {reporter.authors && (
                <span>
                  {reporter.authors.map((author, index, array) => (
                    <span key={author.name}>
                      <a href={`mailto:${author.email}`}>{author.name}</a>
                      {index !== array.length - 1 ? ', ' : ' '}
                    </span>
                  ))}
                </span>
              )}
              ({reporter.organization})
              {index !== array.length - 1 ? ', ' : ''}

            </span>
          ))}
        </div>
      )}
      
      {data.observatories && data.observatories.length > 0 && (
        <div>
          <h2>Observatories</h2>
          {data.observatories.map(observatory => (
            <div key={observatory.name}>
              {observatory.name && <b>{observatory.name}</b>}
              <ul>
                {observatory.instrument && <li>Instrument: {observatory.instrument}</li>}
                {observatory.observation_mode && <li>Observation Mode: {observatory.observation_mode}</li>}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {data.categories && data.categories.length > 0 && (
        <div>
          <h2>Categories</h2>
          <ul>
            {data.categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      )}
      
      {data.references && data.references.length > 0 && (
        <div>
          <h2>References</h2>
          <ul>
            {data.references.map(reference => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Telegram;
