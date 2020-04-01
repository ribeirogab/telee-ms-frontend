import styled from 'styled-components'

export const LastAcess = styled.div`
  max-width: 100%;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 8px #0005;
  background-color: #fff;
  margin-bottom: 40px;

  h1 {
    font-size: 20px;
    color: #222;
    margin-bottom: 15px;
    font-weight: lighter;
  }

  .box {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    div strong {
      color: #333;
    }

    div span { 
      width: 80px; 
      display: inline-block; 
      color: #555;
    }
  }
`

export const News = styled.div`
  max-width: 100%;
  padding: 50px 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 8px #0005;
  background-color: #fff;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 25px;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    .version {
      font-size: 20px;
      color: #29f;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.2s;
      transition: text-decoration 0.2s;
    }
    .version:hover {
      color: #29f8;
      text-decoration: underline;
    }
  }
`
export const ContainerNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`

export const BoxNews = styled.div`
  width: 31.3333333333%;
  margin: 1%;

  @media screen and (max-width: 991px){
    width: 48%;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    margin: 10px 0;
  }

  .box {
    line-height: 24px;
    border-radius: 8px;
    border: solid 1px #0005;
    padding: 20px;
  }
`
