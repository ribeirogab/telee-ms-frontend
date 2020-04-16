import styled from 'styled-components'

export const Container = styled.div`
  .quill {
    border: none;
  }
  .quill .ql-toolbar {
    width: 100%;
    top: 48px;
    left: 0;
    position: fixed;
    text-align: center;
    background-color: #fff;
    z-index: 98;
    border: solid 1px #0001;
  }

  .quill .ql-container {
    border: none;
    height: 100%;
  }

  .quill .ql-editor {
    border: none;
    height: 100%;
    background-color: #fff;
    margin-top: 80px;
    transition: border-color 0.2s;
    font-size: 18px;
  } 

  .quill .ql-editor:nth-child(1) * {
    border-left: solid 1px #0000;
    padding-left: 5px;
    margin-bottom: 5px;
    transition: border-left 0.2s;
  } 

  .quill .ql-editor:nth-child(1) *:hover {
    /* border-left: solid 1px #0003; */
  } 
`
