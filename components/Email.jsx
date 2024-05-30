import React, { useState, useEffect } from 'react';

const Email = ({ user, domain, children }) => {
  const [email, setEmail] = useState('{email}');

  useEffect(() => {
    // Генерируем email на клиенте
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  return (
    <a href={`mailto:${email}`}>
      {children || email}
    </a>
  );
};

export default Email;
