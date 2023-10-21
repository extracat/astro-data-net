import React from 'react';

export function TelegramForm ({ formData, handleChange, handleSubmit, isLoading }) {


  //console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
        <label>External ID:</label>
        <input type="text" name="external_id" value={formData.external_id} onChange={handleChange} />
        
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
          
        <div>
          <label>Body:</label>
          <div>
            <textarea name="body" value={formData.body} onChange={handleChange} />
          </div>
        </div>

        <label>
          Band:
          <select name="band" value={formData.band} onChange={handleChange}>
            <option value="radio">Radio</option>
            <option value="ir">IR</option>
            <option value="visible">Visible</option>
            <option value="uv">UV</option>
            <option value="x-ray">X-ray</option>
            <option value="gamma">Gamma</option>
          </select>
        </label>

        {/* Coordinates */}
        <fieldset>
          <legend>Coordinates</legend>
          <div>
            <label>
              RA:
              <input type="text" name="value" value={formData.coordinates.ra.value} onChange={(e) => handleChange(e, 'coordinates', null, 'ra')} />
            </label>
            <label>
              RA error:
              <input type="text" name="error" value={formData.coordinates.ra.error} onChange={(e) => handleChange(e, 'coordinates', null, 'ra')} />
            </label>
          </div>
          <div>
            <label>
              Dec.:
              <input type="text" name="value" value={formData.coordinates.dec.value} onChange={(e) => handleChange(e, 'coordinates', null, 'dec')} />
            </label>
            <label>
              Dec. error:
              <input type="text" name="error" value={formData.coordinates.dec.error} onChange={(e) => handleChange(e, 'coordinates', null, 'dec')} />
            </label>
          </div>
        </fieldset>

        {/* Light Curve */}
        {formData.light_curve.map((curve, idx) => (
          <fieldset key={idx}>
            <legend>Light Curve {idx + 1}</legend>
            <label>
                Datetime:
                <input type="datetime-local" name="datetime" value={curve.datetime} onChange={(e) => handleChange(e, 'light_curve', idx)} />
            </label>
            <label>
                Magnitude:
                <input type="number" name="magnitude" value={curve.magnitude} onChange={(e) => handleChange(e, 'light_curve', idx)} />
            </label>
            {/* Add other fields for light_curve... */}
          </fieldset>
        ))}

        {/* Authors */}
        {formData.authors.map((author, idx) => (
          <fieldset key={idx}>
            <legend>Author {idx + 1}</legend>
            <label>
              Name:
              <input type="text" name="name" value={author.name} onChange={(e) => handleChange(e, 'authors', idx)} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={author.email} onChange={(e) => handleChange(e, 'authors', idx)} />
            </label>
            <label>
              Organization:
              <input type="text" name="org" value={author.org} onChange={(e) => handleChange(e, 'authors', idx)} />
            </label>
          </fieldset>
        ))}

        {/* Observatories */}
        {formData.observatories.map((observatory, idx) => (
          <fieldset key={idx}>
            <legend>Observatory {idx + 1}</legend>
            <label>
                Name:
                <input type="text" name="name" value={observatory.name} onChange={(e) => handleChange(e, 'observatories', idx)} />
            </label>
            <label>
                Instrument:
                <input type="text" name="instrument" value={observatory.instrument} onChange={(e) => handleChange(e, 'observatories', idx)} />
            </label>
            <label>
                Observation Mode:
                <input type="text" name="observation_mode" value={observatory.observation_mode} onChange={(e) => handleChange(e, 'observatories', idx)} />
            </label>
          </fieldset>
        ))}

        {/* Categories */}
        {formData.categories.map((category, idx) => (
          <fieldset key={idx}>
            <legend>Category {idx + 1}</legend>
            <label>
                Name:
                <input type="text" name="category" value={category} onChange={(e) => handleChange(e, 'categories', idx)} />
            </label>
          </fieldset>
        ))}

        {/* References */}
        {formData.references.map((reference, idx) => (
          <fieldset key={idx}>
            <legend>Reference {idx + 1}</legend>
            <label>
                URL:
                <input type="text" name="reference" value={reference} onChange={(e) => handleChange(e, 'references', idx)} />
                
            </label>
          </fieldset>
        ))}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </button>
      {formData.error && <p style={{ color: 'red' }}>{formData.error}</p>} {/* display error */}
    </form>
  );
}
