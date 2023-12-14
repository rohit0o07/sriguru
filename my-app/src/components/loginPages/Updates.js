import * as React from 'react';
import PopupState, { bindTrigger } from 'material-ui-popup-state';

export default function FarmLandProjects() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <h5 variant="contained" {...bindTrigger(popupState)}>
            UPDATES
          </h5>
        </React.Fragment>
      )}
    </PopupState>
  );
}