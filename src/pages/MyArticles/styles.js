import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ArticleBox = styled.div`
  width: 49%;
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 4px #0001;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 4px 4px 8px #0002;
  }
  
  @media screen and (max-width: 1140px) {
    width: 49%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const ArticleHeader = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #0001;

  div:nth-child(2) {
    position: relative;
    left: -15px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 25px;
      margin-left: 10px;
    }

    span {
      color: #666;
      margin-top: 5px;
    }
  }
`

export const ArticleStatus = styled.div`
  position: relative;
  left: -15px;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: solid 1px #0001;
  box-shadow: 1px 1px 2px #0003;
  background-color: ${props => props.bgcolor};
  border-radius: 100%;
  text-transform: uppercase;
  font-weight: bold;
  svg { font-size: 30px; }
`

export const ArticleMoreOptions = styled.div`
  margin-top: 5px;
  margin-bottom: auto;
  margin-left: auto;
  cursor: pointer;
`

export const ArticleBody = styled.div`
  padding: 10px 10px;
  border-bottom: solid 1px #0001;

  div {
    padding:  7px;
    border: solid 1px #0001;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 14px;

    strong {
      font-size: 14px;
    }
  }

  .group {
    padding: 0;
    margin-bottom: 0;
    border: none;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    
    div {
      width: 45%;
      padding:  7px;
      border: solid 1px #0001;
      margin-bottom: 10px;
      border-radius: 4px;
      font-size: 14px;

      strong {
        font-size: 14px;
      }
    }
  }
`

export const ArticleFooter = styled.div`
  margin-top: 10px;
  padding: 0 20px 20px 20px;

  display: flex;
  justify-content: space-between; 

  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    border-right: solid 1px #0001;

    strong {
      font-size: 21px;
      line-height: 45px;
      color: green;
    }
    span { font-size: 13px; }
  }

  .info-audit {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64%;

    .editor {
      display: flex;

      .info-editor{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        
        strong { font-size: 15px; }
        small, span { font-size: 12px; color: #666; }
      }
    }

    .stars {
      margin-top: 10px;
      color: #000;
      svg { margin: 0 3px; }
    }
  }
`
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100%
`
