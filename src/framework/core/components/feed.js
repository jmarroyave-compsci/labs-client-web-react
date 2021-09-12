import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const animationStyle = {
  transition: 'width 1000ms 0s ease, height 1500ms 0s ease',
};

const styles = theme => ({
  root: {
    marginTop: 0,
  },
  item: {
    padding : 0,
  },
  items:{
    display: 'block',
  },
  toggle: {
    backgroundColor: '#f0f0f0',
    padding: 0,
    margin: 0,
    marginBottom: 5,
    textAlign: 'right',
  }, 
 rowLabels :{
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexWrap:  'wrap',
    padding: 5,
    margin: 5,
  },
  tag: {
    float: 'left',
    margin: 1,
    border: '1px solid black',
    padding: 3,
    display: 'block',
    fontSize: 7,
  },  
  group_label: {
    padding: 5,
    paddingTop: 10,
  },
});

class Feed extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentItem: null,
      wikipedia : null,
      trackState : true,
    }

    this.onItemClick = this.onItemClick.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onItemClick(item){
    if(this.state.trackState){
      var expanded;
      if(this.state.currentItem === item){
        this.setState({currentItem : null});
        expanded = false;
      } else {
        this.setState({currentItem : item});
        expanded = true;
      }

      if(this.props.onClick){
        this.props.onClick(item, expanded);
      }      
    } else {
      if(this.props.onClick){
        this.props.onClick(item);      
      }
    }
  }

  onLabelClick(label){
    if(this.props.onFilterClick)
      this.props.onFilterClick(label);
  }

  componentDidMount(){
    if(this.props.disableState){
      this.setState({trackState : false});
    }
  }

	render(){
		var key = 0;
		var classes = this.props.classes;
		const sections = this.getSections(this.props.items, this.props.getDate);
  	return(
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          {sections && sections.map(s => 
            s.items && s.items.length > 0 && 
              <div key={key++}>
                <div className={classes.group_label}>{s.header}</div>
                <div className={classes.items}>
                  {s.items.map(item=>
                    this.isFilteredIn(item) &&
                    <div onClick={this.onItemClick.bind(this, item)} key={key++} style={animationStyle}>
                      <div>
                        {this.props.renderItem(item, (item === this.state.currentItem))}
                        {!this.props.hideTags && item[this.props.filter.field].length > 0 &&
                          <div className={classes.rowLabels}>
                            { item[this.props.filter.field].map(tag =>
                              <span className={classes.tag} key={key++} onClick={this.onLabelClick.bind(this, tag)}>{tag}</span>
                            )}
                          </div>                            
                        }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          }  

        </Grid>
      </Grid>
    );
	}
 
  isFilteredIn(item){
    if(!this.props.filter) return true;

    if(!this.props.filter.current) return true;

    if(this.props.filter.current.length === 0) return true;

    for(var i = 0; i < this.props.filter.current.length; i++){
      if(item[this.props.filter.field].indexOf(this.props.filter.current[i]) >= 0)
        return true;
    }

    return false;
  }

  getSections(items, getDate){
    if(!getDate){
      return [{header : 'All', items : items}];
    }

    const sections = [
      {header : 'today', tick: today(), items : []},
      {header : 'yesterday', tick: today(-1), items : []},
      {header : 'last week', tick: today(-7), items : []},
      {header : 'last month', tick: today(-30), items : []},
      {header : 'older', tick: 0, items : []}
    ];

    if(!items) return sections;

    var s = 0;
    var sec = sections[s++];
    for(var i = 0; i < items.length; i++){
      var d = new Date(getDate(items[i]));
      if(sec.tick === 0 || d >= sec.tick){
        sec.items.push(items[i]);
      } else {
        sec = sections[s++];
        i--;
      }
    }
    return sections;
  }  	
}

function today(ago){
  var today = new Date();
  today = new Date(`${today.getUTCFullYear()}/${today.getUTCMonth() + 1}/${today.getUTCDate()} 00:00:00`);
  if(ago){
    today = today.setDate(today.getDate() + ago)
  }
  return today;
}

export default withStyles(styles)(Feed);
