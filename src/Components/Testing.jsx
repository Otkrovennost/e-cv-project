import React, { useEffect, useState } from 'react';

function Testing() {
  const [state, setState] = useState(null);
  if (state) {
    console.log(state[0].cvImage);
  }
  useEffect(() => {
    fetch('http://localhost:5000/cv_templates')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);
  return (
    <div>
      {state ? (
        <div className="">
          <div className="">{state[0].id}</div>
          <img
            src={`data:image/jpeg;base64,${state[0].cvImage}`}
            alt="Buffer"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Testing;
