import React from 'react';
import Input from './Input';
import Select from './Select';
import FormItem from './FormItem';

const LightCurveSubform = ({ item, index, onChange, getFieldErrors }) => {
  const getError = (fieldPath) => {
    return getFieldErrors(`light_curve[${index}].${fieldPath}`);
  };

  const filterOptions = [
    { value: 'I', label: 'I' },
    { value: 'R', label: 'R' },
    { value: 'V', label: 'V' },
    { value: 'B', label: 'B' },
    { value: 'W', label: 'W' },
    { value: 'C', label: 'C' },
  ];

  return (
    <>
      {/* Date & time */}
      <FormItem 
        className="w-64 sm:w-72"
        label="Date & time"
        id={`light_curve[${index}].datetime`}
        error={getError('datetime')}
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
          id={`light_curve[${index}].magnitude`}
          error={getError('magnitude')}
        >
          <Input
            name={`magnitude`}
            type="number"
            placeholder=""
            value={item.magnitude || ''}
            onChange={(e) => onChange(index, {
              ...item,
              magnitude: e.target.value
            })}
          />
        </FormItem>

        <FormItem 
          label="Upper limit"
          id={`light_curve[${index}].upper_limit`}
          error={getError('upper_limit')}
        >
          <Input
            name={`upper_limit`}
            type="number"
            placeholder=""
            value={item.upper_limit || ''}
            onChange={(e) => onChange(index, {
              ...item,
              upper_limit: e.target.value
            })}
          />
        </FormItem>

        <FormItem 
          label="Exposure time"
          id={`light_curve[${index}].exptime`}
          error={getError('exptime')}
        >
          <Input
            name={`exptime`}
            type="number"
            placeholder=""
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
          id={`light_curve[${index}].filter`}
          error={getError('filter')}
        >
          <Select
            name={`filter`}
            placeholder="Select from the list"
            options={filterOptions}
            value={item.filter || ''}
            onChange={(e) => onChange(index, {
              ...item,
              filter: e.target.value
            })}
          />
        </FormItem>

        <FormItem 
          label="Instrument name"
          id={`light_curve[${index}].instrument.name`}
          error={getError('instrument.name')}
        >
          <Input
            name={`instrument.name`}
            placeholder=""
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

      </div>
      

      <div className="font-semibold">Coordinates</div>

      <div className="sm:grid sm:grid-cols-3 gap-8">

        <FormItem 
          label="RA"
          id={`light_curve[${index}].coordinates.right_ascension`}
          error={getError('coordinates.right_ascension')}
        >
          <Input
            name={`coordinates.right_ascension`}
            placeholder=""
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
          id={`light_curve[${index}].coordinates.declination`}
          error={getError('coordinates.declination')}
        >
          <Input
            name={`coordinates.declination`}
            placeholder=""
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
          id={`light_curve[${index}].coordinates.error`}
          error={getError('coordinates.error')}
        >
          <Input
            name={`coordinates.error`}
            placeholder=""
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