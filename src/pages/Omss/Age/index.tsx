import React from 'react';
import { useIntl } from '@umijs/max';

const OmssAge: React.FC = () => {
  const intl = useIntl();
  return (
    <div>
      OmssAge
      <div>
        国际化： {intl.formatMessage({
          id: 'pages.welcome.alertMessage',
          defaultMessage: 'Faster and stronger heavy-duty components have been released.',
        })}
      </div>
    </div>
  )
};

export default OmssAge;