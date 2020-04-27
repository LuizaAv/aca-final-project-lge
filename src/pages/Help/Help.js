import React from 'react';
import useStyles from './Help.style';
import {FormattedMessage} from 'react-intl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const data = [
    
   {title:'AboutApplication',
   path:'/Help',
   content:'AboutHelp'},
   {title:'Summary',
   path:'/Summary',
   content:'SummaryHelp'},
   {title:'History',
   path:'/History',
   content:'HistoryHelp'},
   {title:'Categories',
   path:'/Categories',
   content:'CategoriesHelp'},
   {title:'Charts',
   path:'/Charts',
   content:'ChartsHelp'},
   
    
]


export default function Help(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
   
    
    return(
        <>
        <div>
        <h1 className={classes.h1}>
            <FormattedMessage id='Learn'/>
            </h1>
        </div>
        <div className={classes.root}>
            {data.map(item=>(
            <ExpansionPanel  key={item.title} expanded={expanded === item.title} onChange={handleChange(item.title)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
              <FormattedMessage id={item.title}/>
              </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.paragraph}>
           <FormattedMessage id={item.content}/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
            ))}
        </div>  
        </>
    )
}