import styled from 'styled-components'

export const ToolsBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 4px 4px 8px #0001;
  position: ${(props) => props.fixed ? 'fixed' : 'normal'};
  top: ${(props) => props.fixed ? 0 : ''};

  div {
    padding-right: 2%;
    svg {
      margin: 0 5px;
      cursor: pointer;
      transition: color 0.3s;
      color: #222;
    }

    svg:hover {
      color: #E75656;
    }
  }
`
export const PreviewContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 16px #0003;
  border-radius: 4px;
`

export const PreviewTop = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px 4px 0 0;

  @media screen and (max-width: 500px){
    flex-direction: column;
    .values {
      border-top: solid 1px #0001;
    }
  }

  .info {
    padding: 20px;

    h2 {
      color: #E75656;
      font-size: 24px;
      margin-bottom: 7px;
    }

    p, span {
      color: #333;
    }

    .destiny {
      margin-top: 7px;
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }

  .values {
    padding: 20px;
    border-left: solid 1px #0001;

    div + div {
      margin-top: 10px;
    }
  }
`

export const Money = styled.div`
  border: ${props => props.border ? `solid 2px ${props.color}` : 'none'};
  background-color: ${props => props.border ? `${props.color}1` : 'none'};
  color: ${props => props.color};
  font-size: ${props => `${props.size}px` || 'normal'};
  padding: ${props => props.padding || 'none'};
`

export const Words = styled.div`
  border: ${props => props.border ? `solid 2px ${props.color}` : 'none'};
  background-color: ${props => props.border ? `${props.color}1` : 'none'};
  color: ${props => props.color};
  font-size: ${props => `${props.size}px` || 'normal'};
  padding: ${props => props.padding || 'none'};
`

export const PreviewBottom = styled.div`
  background-color: #f5f5f5;
  padding: 5px 20px;
  border-radius: 0 0 4px 4px;


  .bar-container { overflow: auto; }

  .bar {
    min-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bar .user {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 20px;

    div {
      font-size: 50px;
    }

    strong {
      margin-left: 10px;
    }
  }

  .bar small {
    margin-left: auto;
    font-size: 14px;
    color: #666;
  }
`

export const Status = styled.div`
  border: solid 2px #C39234;
  background-color: #C933;
  color: #C39234;
  padding: 5px 20px;
  text-transform: uppercase;
`

export const Comments = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 24px;
    font-weight: lighter;
    color: #333;
    padding-bottom: 5px;
    border-bottom: solid 1px #0002;
  }

  .chat-container {
    box-shadow: 2px 2px 10px #0002;
  }

  .comment-area {
    border-top: solid 1px #0001;
    display: flex;
    flex-direction: column;
    padding: 20px;

    textarea {
      border: solid 1px #0002;
      border-radius: 4px;
      resize: none;
      height: 100px;
    }

    button {
      margin-top: 10px;
      width: 120px;
      padding: 10px 0;
      margin-left: auto;
      border-radius: 4px;
      border: none;
      color: #fff;
      background-color: #D3455B;
      cursor: pointer;
      transition: background 0.2s;
    }

    button:hover {
      background-color: #b3253B;
    }
  }
`

export const Chat = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 500px;
  background: #fff;
  
`

export const ArticleBox = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 24px;
    font-weight: lighter;
    color: #333;
    padding-bottom: 5px;
    border-bottom: solid 1px #0002;
  }

  .article-container {
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 10px #0002;

    .info-container {
      overflow: auto;
    }

    .info {
      min-width: 500px;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      border-bottom: solid 1px #0001;

      div {
        margin-right: 20px;
      }

      small { 
        margin-left: auto;
        font-size: 14px;
        color: #666;
      }
    }
  }
`
export const ArticleContent = styled.div`
  height: 500px;
  margin-bottom: 50px;
  padding: 15px 25px;
`
