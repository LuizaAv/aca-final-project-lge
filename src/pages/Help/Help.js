import React from 'react';
import { FormattedMessage } from 'react-intl';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Help.style';

const data = [
  {
    title: 'aboutUs',
    path: '/Help',
    content: 'aboutHelp',
  },
  {
    title: 'summary',
    path: '/Summary',
    content: 'summaryHelp',
  },
  {
    title: 'history',
    path: '/History',
    content: 'historyHelp',
  },
  {
    title: 'categories',
    path: '/Categories',
    content: 'categoriesHelp',
  },
  {
    title: 'charts',
    path: '/Charts',
    content: 'chartsHelp',
  },
];


export default function Help() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
      <div>
        <h1 className={classes.h1}>
          <FormattedMessage id="learn" />
        </h1>
      </div>
      <div className={classes.root}>
        {data.map((item) => (
          <ExpansionPanel
            key={item.title}
            expanded={expanded === item.title}
            onChange={handleChange(item.title)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <FormattedMessage id={item.title} />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.paragraph}>
                <FormattedMessage id={item.content} />
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </>
  );
}
