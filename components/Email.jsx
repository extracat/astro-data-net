import React, { useState, useEffect } from 'react';

const Email = ({ email, children }) => {
  const [visibleEmail, setVisibleEmail] = useState('{email}');

  useEffect(() => {
    setVisibleEmail(email);
  }, [email]);

  return (
    <a href={`mailto:${visibleEmail}`}>
      {children || visibleEmail}
    </a>
  );
};

export default Email;
