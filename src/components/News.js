import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

 const styles = ({ palette, spacing, mixins }) => ({
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    padding: spacing.unit * 3,
    minWidth: 0
  },
  toolbar: mixins.toolbar
});

 const NewsContent = ({ classes }) => {
  const { content, toolbar } = classes;
   return (
    <div className={content}>
      <div className={toolbar} />
      <Typography noWrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography> 
    </div>
  );
}
 NewsContent.propTypes = {
  classes: PropTypes.object.isRequired
};

 export default withStyles(styles)(NewsContent); 