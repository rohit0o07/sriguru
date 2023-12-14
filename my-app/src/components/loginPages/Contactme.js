import * as React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function FarmLandProjects() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <h5 variant="contained" {...bindTrigger(popupState)}>
            CONTACT ME
          </h5>
        </React.Fragment>
      )}
    </PopupState>
  );
}