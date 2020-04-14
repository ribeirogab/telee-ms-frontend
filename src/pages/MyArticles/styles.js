import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ArticleBox = styled.div`
  width: 49%;
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #0002;
  box-shadow: 2px 2px 4px #0002;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 4px 4px 8px #0005;
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
      color: ${props => props.color};
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
  background-color: ${props => props.color}9;
  border-radius: 100%;
  text-transform: uppercase;
  font-weight: bold;
  svg { font-size: 30px; }
`

export const ArticleBody = styled.div`
  padding: 10px 10px;
  border-bottom: solid 1px #0001;
  color: #333;

  div {
    padding:  7px;
    border: solid 1px #0001;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 14px;

    strong {
      font-size: 14px;
      color: #222;
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
        color: #222;
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
    width: 49%;
    border-right: solid 1px #0001;

    strong {
      font-size: 25px;
      line-height: 45px;
      color: ${props => props.color};
    }
    span { font-size: 16px; color: #444; }
  }

  .audit {
    width: 49%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const AuditButton = styled.button`
  width: 100%;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    width: 100%;
    padding: 15px 0;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border: solid 1px ${props => props.color};
    background-color: ${props => props.disabled ? props.color : '#fff'};
    color: ${props => props.disabled ? '#fff' : props.color};
    transition: color 0.3s;  
    transition: background-color 0.3s;
  }

  .icon {
    margin-left: 7px;
    transition: margin-left 0.3s;
  }
  
  & a:hover{
    background-color: ${props => props.color};
    color: #fff;
    .icon {
      margin-left: 15px;
    }
  }
`
