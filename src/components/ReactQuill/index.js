import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Container } from './styles'

export default function ReactQuillComponent ({ setWords }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    function isWord (word) {
      console.log(word)
      return word.length >= 2 && /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/.test(word)
    }
    const splitValue = value.replace(/<[^>]*>?/gm, ' ').replace(/[^a-z0-9]/gi, ' ').replace('\n', ' ').split(' ')

    const numberOfWords = splitValue.reduce((accumulator, currentWord) =>
      isWord(currentWord) ? accumulator + 1 : accumulator + 0, 0)

    setWords(numberOfWords)
  }, [value, setWords])

  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, true] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'] // remove formatting button
    ]
  }

  return (
    <Container>
      <ReactQuill
        placeholder=" Escreva aqui..."
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

ReactQuillComponent.propTypes = {
  setWords: PropTypes.func
}
