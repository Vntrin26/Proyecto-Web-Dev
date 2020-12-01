import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Dashboard, Assessment, MonetizationOn} from '@material-ui/icons';
import { useHistory } from "react-router-dom";


const GlistItems = () => {

  let history = useHistory()

  return( 
  <div>
    <ListItem button
    onClick = {e => history.push('/dashboard')}>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button
    onClick = {e => history.push('/budget')}>
      <ListItemIcon>
        <Assessment />
      </ListItemIcon>
      <ListItemText primary="Budget" />
    </ListItem>
    <ListItem button
    onClick = {e => history.push('/portfolio')}>
      <ListItemIcon>
        <MonetizationOn />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>
  </div>
  );
}

export default GlistItems;