import React, { useEffect, useRef } from 'react';
 
const LWCComponent = () => {
  const lightningDivRef = useRef(null);
 
  useEffect(() => {
    // Load the Lightning Out JavaScript library
    const script = document.createElement('script');
    script.src = 'https://spde12-dev-ed.lightning.force.com/lightning/lightning.out.js'; // Replace with your Salesforce domain
    script.onload = () => {
      // Initialize Lightning Out
      // eslint-disable-next-line no-undef
      $Lightning.use(
        'c:LightningOutApp', // Replace with your Aura app name
        () => {
          // Create and render the Lightning component
          // eslint-disable-next-line no-undef
          $Lightning.createComponent(
            'c:LwcWrapper', // Replace with your Lightning component name
            {}, // Attributes to pass to the component, if any
            lightningDivRef.current, // DOM element where the component will render
            (cmp) => {
              console.log('Salesforce Component Rendered', cmp);
            }
          );
        },
        'https://spde12-dev-ed.lightning.force.com',
        '00Df4000001TR9x!ARAAQNy6BWWGUYhGCkPVvUySrAKJ8pvECP47izCt0vsYslLNpkQadVX3gjFHAbiMVLrl09C91mDiPn5pTtQC8Dp61mUzhrVz' // Replace with your Salesforce domain
      );
    };
    document.body.appendChild(script);
 
    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
 
  return (
<div>
<h1>Salesforce Lightning Component</h1>
      {/* This div is where the Salesforce component will be rendered */}
<div ref={lightningDivRef}></div>
</div>
  );
};
 
export default LWCComponent;