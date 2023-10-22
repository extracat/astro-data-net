import Markdown from "./Markdown";

export function Telegram({ data }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div>
      {data.title && <h1>{data.title}</h1>}
      {data.id && <p>ID: {data.id}</p>}

      {data.body && <Markdown>{data.body}</Markdown>}


      {data.event_datetime && <p>Event Date: {formatDate(data.event_datetime)}</p>}
      {data.external_id && <p>External ID: {data.external_id}</p>}

      {data.timestamp && <p>Published: {formatDate(data.timestamp)}</p>}

      {data.band && <p>Band: {data.band}</p>}

      {data.coordinates && (
        <div>
          <h2>Coordinates</h2>
          {data.coordinates.ra && <p>Right ascension: {data.coordinates.ra.value} (±{data.coordinates.ra.error} {data.coordinates.ra.error_units})</p>}
          {data.coordinates.dec && <p>Declination: {data.coordinates.dec.value} (±{data.coordinates.dec.error} {data.coordinates.dec.error_units})</p>}
        </div>
      )}

      {data.light_curve && data.light_curve.length > 0 && (
        <div>
          <h2>Light Curve</h2>
          {data.light_curve.map((item, index) => (
            <ul key={index}>
              <li>Date & Time: {formatDate(item.datetime)}</li>
              <ul>
                <li>Magnitude: {item.magnitude}</li>
                <li>Upper Limit: {item.upper_limit}</li>
                <li>Exposition: {item.exptime} seconds</li>
                <li>Filter: {item.filter}</li>
              </ul>
            </ul>
          ))}
        </div>
      )}

      {data.authors && data.authors.length > 0 && (
        <div>
          <h2>Authors</h2>
          {data.authors.map((author, index, array) => (
            <span key={author.email}>
              {author.name}
              {index !== array.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}

      {data.observatories && data.observatories.length > 0 && (
        <div>
          <h2>Observatories</h2>
          {data.observatories.map(observatory => (
            <ul key={observatory.name}>
              {observatory.name && <li>{observatory.name}</li>}
              <ul>
                {observatory.instrument && <li>Instrument: {observatory.instrument}</li>}
                {observatory.observation_mode && <li>Observation Mode: {observatory.observation_mode}</li>}
              </ul>
            </ul>
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
