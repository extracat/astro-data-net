import Angle from "./Angle";
import Date from "./Date";

export default function LightCurve(props) {

  return (
    <div className="overflow-x-auto">
      <table className="not-prose my-1" style={{borderSpacing: '0.7em 0', marginLeft: '-0.7em', borderCollapse: 'separate'}}>
        <tbody>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11 pt-1">T</th>
            {props.lightCurve.map((item, index) => (
              <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark rounded-t-lg px-3 py-1 pt-2">
                <Date value={item.datetime} t0={props.lightCurve[0].datetime} format="T" />
              </td>
            ))}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">T−T0</th>
            {props.lightCurve.map((item, index) => (
              <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">
                <Date value={item.datetime} t0={props.lightCurve[0].datetime} diff format="T" />
              </td>
            ))}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">mag.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="font-semibold text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">{item.magnitude}<sup>m</sup></td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">limit</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">{item.upper_limit}<sup>m</sup></td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">exp.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">{item.exptime} s</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">filter</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">▨ {item.filter}</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">RA</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">
              {item.coordinates && <Angle type="angle" format="HMS" value={item.coordinates.right_ascension} />}</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">Dec.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">
              {item.coordinates && <Angle format="DMS" value={item.coordinates.declination}/>}</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">err.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="text-right min-w-40 adn-color-fill-bg-dark px-3 py-1">
              {item.coordinates && <Angle format="DEG" value={item.coordinates.error}/>}</td>)}
          </tr>
          <tr>
            <th className="text-xs sm:text-sm font-semibold text-left w-11">inst.</th>
            {props.lightCurve.map((item, index) => <td key={index} className="font-medium text-right text-xs w-28 adn-color-fill-bg-dark rounded-b-lg px-3 py-1 pb-2">
              {item.instrument && item.instrument.name}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}