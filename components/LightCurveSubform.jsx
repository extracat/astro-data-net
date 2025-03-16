import React from 'react';
import Input from './Input';

const LightCurveSubform = ({ item, index, onChange }) => {
  return (
    <div className="space-y-4">
      {/* Coordinates */}
      <div className="grid grid-cols-3 gap-4">
        <Input
          name={`coordinates.right_ascension`}
          placeholder="Right Ascension"
          value={item.coordinates?.right_ascension || ''}
          onChange={(e) => onChange(index, {
            ...item,
            coordinates: {
              ...item.coordinates,
              right_ascension: e.target.value
            }
          })}
        />
        <Input
          name={`coordinates.declination`}
          placeholder="Declination"
          value={item.coordinates?.declination || ''}
          onChange={(e) => onChange(index, {
            ...item,
            coordinates: {
              ...item.coordinates,
              declination: e.target.value
            }
          })}
        />
        <Input
          name={`coordinates.error`}
          placeholder="Error"
          value={item.coordinates?.error || ''}
          onChange={(e) => onChange(index, {
            ...item,
            coordinates: {
              ...item.coordinates,
              error: e.target.value
            }
          })}
        />
      </div>

      {/* Observation details */}
      <div className="grid grid-cols-3 gap-4">
        <Input
          name={`datetime`}
          type="datetime-local"
          placeholder="Date and Time"
          value={item.datetime || ''}
          onChange={(e) => onChange(index, {
            ...item,
            datetime: e.target.value
          })}
        />
        <Input
          name={`magnitude`}
          type="number"
          placeholder="Magnitude"
          value={item.magnitude || ''}
          onChange={(e) => onChange(index, {
            ...item,
            magnitude: e.target.value
          })}
        />
        <Input
          name={`upper_limit`}
          type="number"
          placeholder="Upper Limit"
          value={item.upper_limit || ''}
          onChange={(e) => onChange(index, {
            ...item,
            upper_limit: e.target.value
          })}
        />
      </div>

      {/* Instrument details */}
      <div className="grid grid-cols-3 gap-4">
        <Input
          name={`instrument.name`}
          placeholder="Instrument Name"
          value={item.instrument?.name || ''}
          onChange={(e) => onChange(index, {
            ...item,
            instrument: {
              ...item.instrument,
              name: e.target.value
            }
          })}
        />
        <Input
          name={`instrument.observation_mode`}
          placeholder="Observation Mode"
          value={item.instrument?.observation_mode || ''}
          onChange={(e) => onChange(index, {
            ...item,
            instrument: {
              ...item.instrument,
              observation_mode: e.target.value
            }
          })}
        />
        <Input
          name={`filter`}
          placeholder="Filter"
          value={item.filter || ''}
          onChange={(e) => onChange(index, {
            ...item,
            filter: e.target.value
          })}
        />
      </div>

      {/* Observatory details */}
      <div className="grid grid-cols-3 gap-4">
        <Input
          name={`instrument.observatory.name`}
          placeholder="Observatory Name"
          value={item.instrument?.observatory?.name || ''}
          onChange={(e) => onChange(index, {
            ...item,
            instrument: {
              ...item.instrument,
              observatory: {
                ...item.instrument?.observatory,
                name: e.target.value
              }
            }
          })}
        />
        <Input
          name={`instrument.observatory.org`}
          placeholder="Organization"
          value={item.instrument?.observatory?.org || ''}
          onChange={(e) => onChange(index, {
            ...item,
            instrument: {
              ...item.instrument,
              observatory: {
                ...item.instrument?.observatory,
                org: e.target.value
              }
            }
          })}
        />
        <Input
          name={`instrument.observatory.country`}
          placeholder="Country"
          value={item.instrument?.observatory?.country || ''}
          onChange={(e) => onChange(index, {
            ...item,
            instrument: {
              ...item.instrument,
              observatory: {
                ...item.instrument?.observatory,
                country: e.target.value
              }
            }
          })}
        />
      </div>
    </div>
  );
};

export default LightCurveSubform;