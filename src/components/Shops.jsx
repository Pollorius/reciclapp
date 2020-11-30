import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba()',
    borderBottom: '1px solid rgb(204,204, 102)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    },
    borderRadius: '10px'
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails)

export default function Shops () {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary style={{backgroundColor: 'rgb(224, 234, 215)'}} aria-controls='panel1d-content' id='panel1d-header'>
          <Typography >
          <Box  fontFamily="Roboto" letterSpacing={3} fontWeight='' >
             Comercio #1
            </Box>
            </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgb(140, 140, 72)'}}>
          <Typography style={{color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary style={{backgroundColor: 'rgb(224, 234, 215)'}} aria-controls='panel2d-content' id='panel2d-header'>
          <Typography >
          <Box  fontFamily="Roboto" letterSpacing={3} fontWeight='' >
             Comercio #2
            </Box>
            </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgb(140, 140, 72)'}}>
          <Typography style={{color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  style={{backgroundColor: 'rgb(224, 234, 215)'}} aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>
          <Box  fontFamily="Roboto" letterSpacing={3} fontWeight='' >
             Comercio #3
            </Box>
            </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgb(140, 140, 72)'}}>
          <Typography style={{color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
