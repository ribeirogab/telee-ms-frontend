import React, { useEffect, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Container } from './styles';

interface ReactQuillProps {
  setWords: Function;
  setMoney: Function;
  setValue: Function;
  value: string;
}

const ReactQuillComponent: React.FC<ReactQuillProps> = ({
  setWords,
  setMoney,
  setValue,
  value,
}) => {
  const isWord = useCallback((word: string): boolean => {
    return (
      word.length >= 2 &&
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/.test(word)
    );
  }, []);

  const changeHtmlValue = useCallback(html => setValue(html), [setValue]);

  useEffect(() => {
    const splitValue = value
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/[^a-z0-9]/gi, ' ')
      .replace('\n', ' ')
      .split(' ');

    const numberOfWords = splitValue.reduce(
      (accumulator, currentWord) =>
        isWord(currentWord) ? accumulator + 1 : accumulator + 0,
      0,
    );

    setWords(numberOfWords);
    setMoney(numberOfWords * 0.06);
  }, [value, setMoney, setWords, isWord]);

  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, true] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
      ['link', 'video'],
      // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'], // remove formatting button
    ],
  };

  return (
    <Container>
      <ReactQuill
        placeholder=" Escreva aqui..."
        theme="snow"
        modules={modules}
        value={value}
        onChange={changeHtmlValue}
      />
    </Container>
  );
};

export default ReactQuillComponent;
