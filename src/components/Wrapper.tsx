import React from 'react';
import moment from 'moment';
import useCountdown from '../hooks/useCountdown';
import { Cta } from './Cta';

const SCHEDULE = "2023-01-26T19:10:00+0000";

export default function Wrapper(): React.ReactElement {

  const scheduledTime = SCHEDULE ? moment(SCHEDULE) : null;
  const isExpired = useCountdown(scheduledTime);
  const isCtaActive = scheduledTime ? isExpired : true;
  console.log("scheduledTime:", scheduledTime);
  console.log("isExpired:", isExpired);
  console.log("isCtaActive:", isCtaActive);


  return (
    <div>
      <Cta
        disabledCTA={!isCtaActive}
        disabledCTACopy={isCtaActive ? undefined : 'Coming Soon'}
      />
    </div>
  );
}
