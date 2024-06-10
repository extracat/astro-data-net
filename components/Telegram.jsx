import "core-js/features/object/has-own";
import Markdown from "./Markdown";
import DataBlock from "./DataBlock";
import { formatDate } from "../utils/formatters";
import LightCurve from "./LightCurve";
import Tag from "./Tag";
import TagList from "./TagList";

export default  function Telegram({ data }) {

  return (
    <div>

      <center className="text-xs sm:text-sm sm:mt-20 mb-10 sm:mb-14 md:px-16">

        {data.timestamp && <span><time suppressHydrationWarning>{formatDate(data.timestamp)}</time><span className="text-red-400 text-lg px-1 align-middle uppercase">•</span> </span>}  
        {data.adn_id && <span>{data.adn_id}</span>}

        {data.title && <h1 className="mb-6 mt-4">{data.title}</h1>}

        {data.categories && data.categories.length > 0 && (
          <TagList>
              {data.categories.map(category => (
                <Tag key={category._id}>{category.text}</Tag>
              ))}
          </TagList>
        )}

      </center>


      
      {data.authors_list && data.authors_list.length > 0 && (
        <div className="text-xs sm:text-sm">
          {(() => {
            const groupedByOrg = data.authors_list.reduce((acc, author) => {
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





      <h2>Light Curve</h2>
      {data.band && <DataBlock label="Band" value={data.band} />}

      {data.event_datetime && <DataBlock label="T0" type="date" value={data.event_datetime} />}

      {data.light_curve && data.light_curve.length > 0 && <LightCurve lightCurve={data.light_curve} />}

      {data.body && <Markdown>{data.body}</Markdown>}

      <hr />

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
