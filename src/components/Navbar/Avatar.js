import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}))

export default function LetterAvatars ({ user }) {
  const [firstLetters, setFirstLetters] = useState('')
  const classes = useStyles()

  useEffect(() => {
    function handleAvatar () {
      if (user.name) {
        const partsName = user.name.split(' ')
        const firstLetter = partsName[0][0].toUpperCase()
        const secondLetter = partsName[partsName.length - 1][0].toUpperCase()
        setFirstLetters(firstLetter + secondLetter)
      }
    }

    handleAvatar()
  }, [user])

  return (
    <div className={classes.root}>
      <Avatar className={classes.purple}>{firstLetters}</Avatar>
    </div>
  )
}

LetterAvatars.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}
