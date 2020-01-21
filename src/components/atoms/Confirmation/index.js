// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react'

const Check = ({ theme }) => {
  return (
    <svg
      width="199"
      height="133"
      viewBox="0 0 199 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10"
        y1="67"
        x2="15"
        y2="70.96"
        opacity="0"
        stroke={(theme && theme.strokeColor) || '#B0B0B0'}
        strokeWidth={(theme && theme.strokeWidth) || '20'}
        strokeLinecap="round"
      >
        <animate
          attributeName="x2"
          values="10;15;20;25;30;35;40;45;50;55;60;65;70;73"
          dur={(theme && theme.duration) || '0.5s'}
          repeatCount="1"
          fill="freeze"
        />
        <animate
          attributeName="y2"
          values="67;70.96;74.92;78.88;82.84;86.80;90.76;94.72;98.68;102.64;106.608;110.56;114.53;118.48;122.45"
          dur={(theme && theme.duration) || '0.5s'}
          repeatCount="1"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.1s"
          fill="freeze"
        />
      </line>
      <line
        x1="73"
        y1="123"
        x2="73"
        y2="123"
        opacity="0"
        stroke={(theme && theme.strokeColor) || '#B0B0B0'}
        strokeWidth="20"
        strokeLinecap="round"
      >
        <animate
          attributeName="x2"
          values="73;83;93;103;113;123;133;143;153;163;173;183;188.008"
          begin={(theme && theme.duration) || '0.5s'}
          repeatCount="1"
          fill="freeze"
          dur={(theme && theme.duration) || '0.5s'}
        />
        <animate
          attributeName="y2"
          values="123;113;103;93;83;73;63;53;43;33;23;13;10"
          begin={(theme && theme.duration) || '0.5s'}
          repeatCount="1"
          fill="freeze"
          dur={(theme && theme.duration) || '0.5s'}
        />
        <animate
          attributeName="opacity"
          values="1"
          begin={(theme && theme.duration) || '0.5s'}
          dur="0s"
          fill="freeze"
        />
      </line>
    </svg>
  )
}

const Confirmation = ({ theme, children }) => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <div
      style={{
        ...{
          transition: `opacity '300ms' ease-in`,
          opacity,
          position: 'absolute',
          left: '50vw',
          top: '50vh',
          transform: 'translate(-50%, -50%)',
          background: '#242424',
          borderRadius: '9px',
          width: '495px',
          height: '495px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        ...(theme && theme.card),
      }}
    >
      <div>
        <Check theme={theme && theme.check} />
      </div>
      <div
        style={{
          ...{
            marginTop: '75px',
            marginLeft: '-20px',
          },
          ...(theme && theme.textWrapper),
        }}
      >
        <span
          style={{
            ...{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '45px',
              lineHeight: '53px',
              color: '#AEAEAE',
            },
            ...(theme && theme.text),
          }}
        >
          {children}
        </span>
      </div>
    </div>
  )
}

export default Confirmation
