class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  handleClick(item) {
    this.setState((prevState) => ({ [item]: !prevState[item] }));
  }
  // if the menu item doesn't have any child, this method simply returns a clickable menu item
  //that redirects to any location and if there is no child this method uses recursion to go until
  //the last level of children and then returns the item by the first condition.
  handler(children) {
    const { classes } = this.props;
    const { state } = this;
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className={classes.links}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    const { classes, drawerOpen, menuOptions } = this.props;
    return (
      <div className={classes.list}>
        <Drawer
          variant="persistent"
          anchor="left"
          open
          classes={{ paper: classes.list }}
        >
          <div>
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                <ListItemText
                  className={classes.menuHeader}
                  inset
                  primary="Nested Menu"
                />
              </ListItem>
              {this.handler(menuItems.data)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(MenuBar);
