import React from 'react';
import ResponsiveDrawer from "./sideDrawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TopAppBar from "./topAppBar";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
   
  }));

  
const SideDrawerContent = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
          <div>Logo</div>
          <div className={classes.toolbar} />
          <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
            <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
        </TreeView>
         
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                 <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>    
        </div>
      );
    return(
        <div> 
        <TopAppBar
         handleDrawerToggle={handleDrawerToggle}
         mobileOpen={mobileOpen}
        />
        <ResponsiveDrawer
        drawer = {drawer} 
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        />
                
     </div>
    )
}

export default SideDrawerContent;