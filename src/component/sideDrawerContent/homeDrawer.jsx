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
      marginTop:'10px',
      marginBottom:'40px',
      marginLeft:'10%'
    },
    toolbar: theme.mixins.toolbar,
    label:{
        
         },
    content:{
        color:'green'
    }
  }));

  
const SideDrawerContent = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const data = [{
        id: 'root',
        name: 'English',
        children: [
          {
            id: '1',
            name: 'Child - 1',
          },
          {
            id: '3',
            name: 'Child - 3'
          },
        ],
      },
      {
        id: 'root-2',
        name: 'Hindi',
        children: [
          {
            id: '1',
            name: 'Child - 1',
          },
          {
            id: '3',
            name: 'Child - 3'
          },
        ],
      },
      {
        id: 'root-2',
        name: 'Math',
        children: [
          {
            id: '1',
            name: 'Child - 1',
          },
          {
            id: '3',
            name: 'Child - 3'
          },
        ],
      },
      {
        id: 'root-2',
        name: 'Computer Science',
        children: [
          {
            id: '1',
            name: 'Child - 1',
          },
          {
            id: '3',
            name: 'Child - 3'
          },
        ],
      }
    ];

    const renderTree = (nodes) => (
        <TreeItem      
             key={nodes.id} 
            nodeId={nodes.id} 
            label={<span style={{ fontWeight: 'bold' }}>{nodes.name}</span>}
            className={classes.label}
         >
             {
                nodes.children.map((node) =>(
                <TreeItem      
                className={classes.content}
                key={node.id} 
                nodeId={node.id} 
                label={node.name}
                />
                ))
            }
        </TreeItem>
       );

    const drawer = (
        <div>
          <div>Logo</div>
          <div className={classes.toolbar} />
          { data.map((data, index) => (
            <TreeView
                key={index}
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                >         
                    {renderTree(data)}
           </TreeView>
           ))}
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