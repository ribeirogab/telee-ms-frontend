import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto'
  },
  rootMobile: {
    maxHeight: '500px'
  },
  item: {
    boxShadow: '4px 4px 8px #0002'
  },
  itemLeft: {
    borderRadius: '4px 0px 0px 4px',
    backgroundColor: 'rgb(251,63,63)',
    background: 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(186,53,80,1) 100%)'
  },
  itemLeftDesktop: {
    padding: 70
  },
  itemLeftMobile: {
    padding: 20,
    borderRadius: '4px 4px 0px 0px'
  },
  itemRight: {
    backgroundColor: '#fff',
    padding: '40px 10% 40px 10%'
  },
  itemRightDesktop: {
    borderRadius: '0px 4px 4px 0px'
  },
  itemRightMobile: {
    borderRadius: '0px 0px 4px 4px'
  },
  title: {
    color: '#fff',
    fontWeight: 'lighter'
  },
  titleForm: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10
  },
  pForm: {
    color: '#666',
    marginBottom: 20
  },
  textField: {
    width: '100%',
    marginBottom: 25
  },
  button: {
    borderRadius: 26,
    float: 'right',
    marginTop: 40,
    backgroundColor: 'rgb(251,63,63)',
    background: 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(186,53,80,1) 100%)'
  }
}))

export default function LayoutForm ({ Form, isUpdate }) {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <Container maxWidth="md">
      <Grid container className={[classes.root, matches ? '' : classes.rootMobile].join(' ')}>
        <Grid
          item xs={matches ? 6 : 12}
          className={[classes.item, classes.itemLeft, matches ? classes.itemLeftDesktop : classes.itemLeftMobile].join(' ')}
        >
          <Typography align={matches ? 'left' : 'right'} component="h1" variant={matches ? 'h5' : 'h6'} className={classes.title}>
            {isUpdate ? 'Edição de' : 'Cadastro de'}
          </Typography>
          <Typography align={matches ? 'left' : 'right'} component="h1" variant={matches ? 'h2' : 'h4'} className={classes.title}>
            Redator.
          </Typography>
        </Grid>
        <Grid item xs={matches ? 6 : 12} className={[classes.item, classes.itemRight, matches ? classes.itemRightDesktop : classes.itemRightMobile].join(' ')}>
          <Typography align={matches ? 'left' : 'center'} component="h2" variant="h4" className={classes.titleForm}>
            Formulário
          </Typography>
          <Typography className={classes.pForm} align={matches ? 'left' : 'center'} paragraph={true}>
            Preencha corretamente as informações abaixo para a realização do cadastro.
          </Typography>
          <Form />
        </Grid>
      </Grid>
    </Container>
  )
}

LayoutForm.propTypes = {
  Form: PropTypes.func.isRequired,
  isUpdate: PropTypes.object
}
