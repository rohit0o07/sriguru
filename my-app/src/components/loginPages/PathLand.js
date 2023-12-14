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
            FARM LAND PROJECTS
          </h5>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>FARM LAND PLOTS FOR SALE -EXOTIC FRUIT PLANTATION AND COMMERCIAL TREE PLANTATION @ZAHEERABAD</MenuItem>
            <MenuItem onClick={popupState.close}>SRI GANDHAM  & RED SANDALWOOD FARMLAND @ PODILI,PRAKASAM DIST,AP</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}