import React from 'react';

interface IProps {
  disabledCTA: boolean;
  disabledCTACopy: string | undefined;
}

export function Cta({ disabledCTA, disabledCTACopy }: IProps) {
  return (
      <div
        style={{
          margin: '1em',
          padding: '2em',
          backgroundColor: disabledCTA ? 'grey' : 'red',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {disabledCTACopy ?? 'Default Text'}
      </div>
  );
}
