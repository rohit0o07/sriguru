import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function FarmLandProjects() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <h5 variant="contained" {...bindTrigger(popupState)}>
            NEWS
          </h5>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>LATEST NEWS:30,467 KG OF SANDALWOOD SOLD AT E-AUCTION,FETCHING $37.22 CRORE</MenuItem>
            <MenuItem onClick={popupState.close}>LATEST NEWS: RED SANDALWOOD GARDEN OPENED AT RAJ BHAVAN</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}