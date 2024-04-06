import { formatDate, formatNumber } from "../utils/formatters";

export default function LightCurve(props) {

  return (
    <div className="overflow-x-auto">
      <table className="not-prose my-1" style={{borderSpacing: '0.7em 0', marginLeft: '-0.7em', borderCollapse: 'separate'}}>
        <tbody>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">T</th>
            {props.lightCurve.map((item, index) => (
              <td key={index} className="text-right w-28 adn-color-fill-bg-dark rounded-t-lg px-3 py-1" suppressHydrationWarning>
                {formatDate(item.datetime, 
                  { 
                    hour: 'numeric', 
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                    timeZone: 'UTC',
                  })}
              </td>
            ))}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">mag.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="font-semibold text-right w-28 adn-color-fill-bg-dark px-3 py-1">{item.magnitude}<sup>m</sup></td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">lim.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right w-28 adn-color-fill-bg-dark px-3 py-1">{item.upper_limit}<sup>m</sup></td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">exp.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right w-28 adn-color-fill-bg-dark px-3 py-1">{item.exptime}"</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">fltr.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right w-28 adn-color-fill-bg-dark rounded-b-lg px-3 py-1">{item.filter}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}