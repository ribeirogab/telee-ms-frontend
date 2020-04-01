import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

// const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#009688', '#ff5722', '#673ab7', '#4caf50', '#ffc107', '#607d8b']

export default function LetterAvatars ({ name }) {
  const [firstLetters, setFirstLetters] = useState('')
  const classes = useStyles()

  useEffect(() => {
    function handleAvatar () {
      if (name) {
        const partsName = name.split(' ')
        const firstLetter = partsName[0][0].toUpperCase()
        const secondLetter = partsName[partsName.length - 1][0].toUpperCase()
        setFirstLetters(firstLetter + secondLetter)
      }
    }

    handleAvatar()
  }, [name])

  return (
    <div className={classes.root}>
      <Avatar style={{ backgroundColor: '#673ab7' }}>{firstLetters}</Avatar>
    </div>
  )
}

LetterAvatars.propTypes = {
  name: PropTypes.string

}
