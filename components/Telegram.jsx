import "core-js/features/object/has-own";
import Markdown from "./Markdown";
import DataBlock from "./DataBlock";
import { formatDate } from "../utils/formatters";

export default  function Telegram({ data }) {

  return (
    <div>

      <center className="text-sm sm:mt-20 mb-4 md:px-16">
        {data.timestamp && <span>{formatDate(data.timestamp)}</span>} — {data.adn_id && <span>{data.adn_id}</span>}
        {data.title && <h1 className="mb-12">{data.title}</h1>}

        {data.categories && data.categories.length > 0 && (
          <div>
              {data.categories.map(category => (
                <span key={category}>{category} | </span>
              ))}
          </div>
        )}

      </center>


      
      {data.authors && data.authors.length > 0 && (
        <div className="text-sm">
          {(() => {
            const groupedByOrg = data.authors.reduce((acc, author) => {
              // Groupping by org
              if (!acc[author.org]) {
                acc[author.org] = [];
              }
              acc[author.org].push(author.name);
              return acc;
            }, {});

            const formattedGroups = Object.entries(groupedByOrg).map(([org, names], index, array) => {
              // Connect the names in one line with the name of the organization
              return `${names.join(', ')} (${org})`;
            });

            // Connecting groups by separating them with a comma and a space
            return formattedGroups.join(', ');
          })()}
        </div>
      )}

      {data.coordinates && (
        <div>
          <h2>Coordinates</h2>
          {data.coordinates.ra && <DataBlock label="RA" bold value={data.coordinates.ra.value} error={data.coordinates.ra.error} />}
          {data.coordinates.dec && <DataBlock label="Dec" bold value={data.coordinates.dec.value} error={data.coordinates.dec.error} />}
        </div>
      )}



      <h2>Light Curve</h2>
      {data.band && <DataBlock label="Band" value={data.band} />}

      {data.event_datetime && <DataBlock label="T0" type="date" value={data.event_datetime} />}

      {data.light_curve && data.light_curve.length > 0 && (
        <div>
          {data.light_curve.map((item, index) => (
            <ul key={index}>
              <li>{formatDate(item.datetime, 
                  { 
                    hour: 'numeric', 
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                    timeZone: 'UTC',
                  })}
              </li>
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

      {data.body && <Markdown>{data.body}</Markdown>}

      <hr />
      {data.external_id && <p>External ID: {data.external_id}</p>}
    
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
