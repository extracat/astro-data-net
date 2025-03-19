import React from 'react';
import Input from './Input';
import FormItem from './FormItem';

const LightCurveSubform = ({ item, index, onChange }) => {
  return (
    <>
      {/* Date & time */}
      <FormItem 
        className="w-64 sm:w-72"
        label="Date & time"
        id="datetime"
        error={null}
      >
        <Input
          name={`datetime`}
          type="datetime-local"
          placeholder="Date & time"
          value={item.datetime || ''}
          onChange={(e) => onChange(index, {
            ...item,
            datetime: e.target.value
          })}
        />
      </FormItem>

      <div className="font-semibold mt-5 mb-3 ">Photometry</div>
      
      <div className="sm:grid sm:grid-cols-3 gap-8">

        <FormItem 
          label="Magnitude"
          id="magnitude"
          error={null}
        >
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
        </FormItem>

        <FormItem 
          label="Upper limit"
          id="upper_limit"
          error={null}
        >
          <Input
            name={`upper_limit`}
            type="number"
            placeholder="Upper limit"
            value={item.upper_limit || ''}
            onChange={(e) => onChange(index, {
              ...item,
              upper_limit: e.target.value
            })}
          />
        </FormItem>

        <FormItem 
          label="Exposure time"
          id="exptime"
          error={null}
        >
          <Input
            name={`exptime`}
            type="number"
            placeholder="Exposure time"
            value={item.exptime || ''}
            onChange={(e) => onChange(index, {
              ...item,
              exptime: e.target.value
            })}
          />
        </FormItem>

      </div>

      <div className="sm:grid sm:grid-cols-2 gap-8">

        <FormItem 
          label="Filter"
          id="filter"
          error={null}
        >
          <Input
            name={`filter`}
            placeholder="Filter"
            value={item.filter || ''}
            onChange={(e) => onChange(index, {
              ...item,
              filter: e.target.value
            })}
          />
        </FormItem>


        {/* Instrument details */}
        <FormItem 
          label="Instrument Name"
          id="instrument.name"
          error={null}
        >
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
        </FormItem>

          
{/*     <FormItem 
          label="Observation Mode"
          id="instrument.observation_mode"
          error={null}
        >
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
        </FormItem>

              
        <FormItem 
          label="Observatory Name"
          id="instrument.observatory.name"
          error={null}
        >
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
        </FormItem>

        <FormItem 
          label="Organization"
          id="instrument.observatory.org"
          error={null}
        >
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
        </FormItem>

        <FormItem 
          label="Country"
          id="instrument.observatory.country"
          error={null}
        >
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
        </FormItem>         
*/}

      </div>
      

      <div className="font-semibold">Coordinates</div>

      <div className="sm:grid sm:grid-cols-3 gap-8">
        {/* Coordinates */}
        <FormItem 
          label="RA"
          id="coordinates.right_ascension"
          error={null}
        >
          <Input
            name={`coordinates.right_ascension`}
            placeholder="RA"
            value={item.coordinates?.right_ascension || ''}
            onChange={(e) => onChange(index, {
              ...item,
              coordinates: {
                ...item.coordinates,
                right_ascension: e.target.value
              }
            })}
          />
        </FormItem>

        <FormItem 
          label="Dec."
          id="coordinates.declination"
          error={null}
        >
          <Input
            name={`coordinates.declination`}
            placeholder="Dec."
            value={item.coordinates?.declination || ''}
            onChange={(e) => onChange(index, {
              ...item,
              coordinates: {
                ...item.coordinates,
                declination: e.target.value
              }
            })}
          />
        </FormItem>

        <FormItem 
          label="Error box"
          id="coordinates.error"
          error={null}
        >
          <Input
            name={`coordinates.error`}
            placeholder="Error box"
            value={item.coordinates?.error || ''}
            onChange={(e) => onChange(index, {
              ...item,
              coordinates: {
                ...item.coordinates,
                error: e.target.value
              }
            })}
          />
        </FormItem>
      </div>
      
    </>
  );
};

export default LightCurveSubform;