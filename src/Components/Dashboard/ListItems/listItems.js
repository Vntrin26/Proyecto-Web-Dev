import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Dashboard, Assessment, MonetizationOn} from '@material-ui/icons';

export const glistItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Assessment />
      </ListItemIcon>
      <ListItemText primary="Budget" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonetizationOn />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>
  </div>
);