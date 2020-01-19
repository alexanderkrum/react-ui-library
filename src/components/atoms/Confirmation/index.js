import React from 'react'

const Check = ({ strokeColor, strokeWidth, duration }) => {
  return <svg width="199" height="133" viewBox="0 0 199 133" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="67" x2="15" y2="70.96" opacity="0" stroke={strokeColor || '#B0B0B0'}
          strokeWidth={strokeWidth || '20'} strokeLinecap="round">
      <animate attributeName="x2" values="10;15;20;25;30;35;40;45;50;55;60;65;70;73" dur={duration || '0.5s'}
               repeatCount="1" fill="freeze"/>
      <animate attributeName="y2"
               values="67;70.96;74.92;78.88;82.84;86.80;90.76;94.72;98.68;102.64;106.608;110.56;114.53;118.48;122.45"
               dur={duration || '0.5s'} repeatCount="1" fill="freeze"/>
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" fill="freeze"/>
    </line>
    <line x1="73" y1="123" x2="73" y2="123" opacity="0" stroke={strokeColor || '#B0B0B0'} strokeWidth="20"
          strokeLinecap="round">
      <animate attributeName="x2" values="73;83;93;103;113;123;133;143;153;163;173;183;188.008"
               begin={duration || '0.5s'} repeatCount="1" fill="freeze" dur={duration || '0.5s'}/>
      <animate attributeName="y2" values="123;113;103;93;83;73;63;53;43;33;23;13;10" begin={duration || '0.5s'}
               repeatCount="1" fill="freeze" dur={duration || '0.5s'}/>
      <animate attributeName="opacity" values="1" begin={duration || '0.5s'} dur="0s" fill="freeze"/>
    </line>
  </svg>
}

const Confirmation = ({ theme, children }) => <div style={{
  background:  theme.card.backgroundColor || '#242424' ,
  borderRadius: theme.card.borderRadius || '9px' ,
  width:  theme.card.width || '495px' ,
  height:  theme.card.height || '495px' ,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <div>
    <Check duration={theme.check.animationDuration}
              strokeColor={theme.check.strokeColor}
              strokeWidth={theme.check.strokeWidth}/>
  </div>
  <div style={{
    marginTop: theme.text.marginTop || '75px',
    marginLeft: theme.text.marginLeft || '-20px',
  }}><span style={{
    fontFamily: theme.text.fontFamily ||  'Roboto' ,
    fontStyle: theme.text.fontStyle || 'normal' ,
    fontWeight: theme.text.fontWeight || '500' ,
    fontSize: theme.text.fontSize || '45px' ,
    lineHeight:  theme.text.lineHeight || '53px' ,
    color: theme.text.color || '#AEAEAE',
  }}>{children}</span></div>
</div>

export default Confirmation
