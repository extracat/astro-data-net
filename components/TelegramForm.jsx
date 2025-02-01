import React from 'react';

export default function TelegramForm ({ formData, handleChange, handleSubmit, isLoading }) {


  //console.log(formData);

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            External ID:
          </span>
        </label>
        <input className="input w-full max-w-xs" type="text" name="external_id" value={formData.external_id} onChange={handleChange} />
      </div>
        
      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Title:
          </span>
        </label>
        <input className="input w-full" type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>        
          
      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">Telegram post text</span>
          <span className="label-text-alt">Use markdown</span>
        </label>

        <textarea className="textarea w-full" name="body" value={formData.body} onChange={handleChange} placeholder="Describe your observations"/>

      </div>
          
      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Band:
          </span>
        </label>
        <select className="select w-full max-w-xs" name="band" value={formData.band} onChange={handleChange}>
          <option value="radio">Radio</option>
          <option value="ir">IR</option>
          <option value="optical">Optical</option>
          <option value="uv">UV</option>
          <option value="x-ray">X-ray</option>
          <option value="gamma">Gamma</option>
        </select>
      </div>

      {/* Coordinates */}
      <fieldset className="my-4">
        <legend><b>Coordinates</b></legend>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">
              RA:
            </span>
          </label>
          <input className="input w-full max-w-xs" type="text" name="value" value={formData.coordinates.ra.value} onChange={(e) => handleChange(e, 'coordinates', null, 'ra')} />
        </div>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">
                RA error:</span>
          </label>
          <input className="input w-full max-w-xs" type="text" name="error" value={formData.coordinates.ra.error} onChange={(e) => handleChange(e, 'coordinates', null, 'ra')} />
        </div>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">
                Dec.: </span>
          </label>
          <input className="input w-full max-w-xs" type="text" name="value" value={formData.coordinates.dec.value} onChange={(e) => handleChange(e, 'coordinates', null, 'dec')} />
        </div>
        <div className="form-control my-2">         
          <label className="label">
            <span className="label-text">
            Dec. error:
            </span>
          </label>
          <input className="input w-full max-w-xs" type="text" name="error" value={formData.coordinates.dec.error} onChange={(e) => handleChange(e, 'coordinates', null, 'dec')} />
        </div>
      </fieldset>

      {/* Light Curve */}
      {formData.light_curve.map((curve, idx) => (
        <fieldset className="my-4" key={idx}>
          <legend><b>Light Curve {idx + 1}</b></legend>
          
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Datetime:          
              </span>
            </label>

            <input className="input w-full max-w-xs"
            datepicker="true" type="datetime-local" name="datetime" value={curve.datetime} onChange={(e) => handleChange(e, 'light_curve', idx)} placeholder="Select date and time" />
            
          </div>



          <div className="form-control my-2"> 
            <label className="label">
              <span className="label-text">
                Magnitude:          
              </span>
            </label>
            <input className="input w-full max-w-xs" name="magnitude" value={curve.magnitude} onChange={(e) => handleChange(e, 'light_curve', idx)} />
          </div>

          {/* Add other fields for light_curve... */}
        </fieldset>
      ))}

      {/* Authors */}
      {formData.authors.map((author, idx) => (
        <fieldset className="my-4" key={idx}>
          <legend><b>Author {idx + 1}</b></legend>

          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Name:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="name" value={author.name} onChange={(e) => handleChange(e, 'authors', idx)} />
          </div>
          
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Email:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="email" name="email" value={author.email} onChange={(e) => handleChange(e, 'authors', idx)} />
          </div>
          
          
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Organization:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="org" value={author.org} onChange={(e) => handleChange(e, 'authors', idx)} />
          </div>
         
        </fieldset>
      ))}

      {/* Observatories */}
      {formData.observatories.map((observatory, idx) => (
        <fieldset className="my-4" key={idx}>
          <legend><b>Observatory {idx + 1}</b></legend>

          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Name:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="name" value={observatory.name} onChange={(e) => handleChange(e, 'observatories', idx)} />
          </div>
          
         
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Instrument:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="instrument" value={observatory.instrument} onChange={(e) => handleChange(e, 'observatories', idx)} />
          </div>
          
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Observation Mode:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="observation_mode" value={observatory.observation_mode} onChange={(e) => handleChange(e, 'observatories', idx)} />
          </div>
          
          
        </fieldset>
      ))}

      {/* Categories */}
      {formData.categories.map((category, idx) => (
        <fieldset className="my-4" key={idx}>
          <legend><b>Category {idx + 1}</b></legend>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">
                Category name:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="category" value={category} onChange={(e) => handleChange(e, 'categories', idx)} />
          </div>
        </fieldset>
      ))}

      {/* References */}
      {formData.references.map((reference, idx) => (
        <fieldset className="my-4" key={idx}>
          <legend><b>Reference {idx + 1}</b></legend>
          <div className="form-control my-2"> 
            <label className="label">
              <span className="label-text">
                ADN ID:
              </span>
            </label>
            <input className="input w-full max-w-xs" type="text" name="reference" value={reference} onChange={(e) => handleChange(e, 'references', idx)} />
          </div>
        </fieldset>
      ))}

      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Create Telegram'}
      </button>

      {/* display error */}
      {formData.error && <div role="alert" className="rounded-sm border-s-4 border-red-500 bg-red-50 my-5 p-4">
        <strong className="block font-medium text-red-600"> Something went wrong </strong>
        <p className="mt-2 text-sm text-red-600">
          {formData.error}
        </p>
      </div>} 
    </form>
  );
}
