import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, List } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ToastContainer, toast } from 'react-toastify';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  icon: {
    marginRight: '8px',
    width: '20px',
    height: '20px',
    minWidth: '0px',
    color: 'rgba(0, 0, 0, 0.74)'
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.84)'
  },
  nested: {
    paddingLeft: theme.spacing(2)
  },
  textSize: {
    fontSize: '0.8rem'
  },
  buttonStyle: {
    fontSize: '0.8rem',
    width: '50px',
    minWidth: '50px'
  }
});
class CustomPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getListItemsForPopover = this.getListItemsForPopover.bind(this);
  }

  getListItemsForPopover(classes) {
    console.log(this.props);

    var StatusLinks=this.props.links.listAction

    const links = StatusLinks.map((link, index) => {
      console.log(link)
      if (link.route) {
        return (
          <Link
            key={link.id}
            to={{ pathname: link.route, query: {data:this.props.data } }}

            className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                {link.subIcon}
              </ListItemIcon>
              <ListItemText
                primary={link.name}
                className={classes.textSize}
                disableTypography
              ></ListItemText>
            </ListItem>
          </Link>
        );
      } 
    });
    return links;
  }

  render() {

    return (
      <React.Fragment>
        <ToastContainer
          position='top-right'
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          autoClose={2000}
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover>
        </ToastContainer>
        <PopupState variant='popover' popupId={'popover' + this.props.id}>
          {popupState => (
            <div>
              <Button
                variant='contained'
                color='primary'
                {...bindTrigger(popupState)}
                className={
                  this.props.className
                    ? this.props.className
                    : this.props.classes.buttonStyle
                }>
                <MoreVertIcon></MoreVertIcon>
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}>
                <List>{this.getListItemsForPopover(this.props.classes)}</List>
              </Popover>
            </div>
          )}
        </PopupState>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(CustomPopover);
