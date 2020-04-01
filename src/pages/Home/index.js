import React from 'react'

import Container from '@material-ui/core/Container'

import { LastAcess, News, ContainerNews, BoxNews } from './styles'

import Header from '../../components/global/Header/index'

export default function Home () {
  return (
    <>
      <Header textPage="Home" />
      <Container maxWidth="lg">
        <LastAcess>
          <h1>Último acesso</h1>
          <div className="box">
            <div><span>Quando:</span><strong>01/04/2020 11:09:08</strong></div>
            <div><span>Duração:</span><strong>37 minutos e 20 segundos</strong></div>
            <div><span>Local:</span><strong>187.84.7.54</strong></div>
          </div>
        </LastAcess>
        <News>
          <h1>Novidades</h1>
          <p>Está no ar a versão <version>1.25.18</version>, com correções, melhorias e algumas novidades que você pode conferir a baixo.</p>
          <ContainerNews>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <BoxNews key={index}>
                <div className="box">
                  <div>Novidade 1</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque at erat sed laoreet. Maecenas aliquet quam sit amet egestas blandit. Cras auctor finibus nibh. Sed tempus enim a augue varius ornare.</p>
                </div>
              </BoxNews>
            ))}
          </ContainerNews>
        </News>
      </Container>
    </>
  )
}
