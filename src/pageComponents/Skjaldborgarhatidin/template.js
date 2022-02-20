import React from 'react'
import { useSelector } from 'react-redux'

import PageTitle from '../../reusableComponents/PageTitle'
import Content from '../../reusableComponents/Content'
import { Wrap, Grid, Container } from './styled'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import Navigator from './Navigator'
import TopImage from '../../reusableComponents/TopImage'
import TopVideo from '../../reusableComponents/TopImage/video'

const getNextPage = (order) => {
  switch (order) {
    case 1:
      return {
        url: '/bio',
        name: 'Skjaldborgarbíó',
        name_en: 'Skjaldborg Cinema',
      }
    case 2:
      return {
        url: '/ferdalagid-gisting',
        name: 'Ferðalag / Gisting',
        name_en: 'How to get there / Accommodation',
      }
    case 3:
      return {
        url: '/hatidin',
        name: 'Hátíðin',
        name_en: 'The Festival',
      }
    default:
      return {
        url: '/hatidin',
        name: 'Hátíðin',
        name_en: 'The Festival',
      }
  }
}

// extra component is optional
const Template = ({
  imageId,
  video,
  title,
  order,
  html,
  extraComponent: Component,
}) => {
  const platform = useSelector((state) => state.reducer.platform)
  return (
    <Container>
      <Header></Header>
      {video ? (
        <TopVideo videoSource={video}></TopVideo>
      ) : (
        <TopImage publicId={imageId}></TopImage>
      )}
      <Grid>
        <Wrap>
          <PageTitle>{title}</PageTitle>
          <Content html={html}></Content>
        </Wrap>
        {platform === 'desktop' ? (
          <Navigator next={getNextPage(order)}></Navigator>
        ) : null}
      </Grid>
      {Component ? <Component></Component> : null}
      {platform === 'mobile' ? (
        <Navigator next={getNextPage(order)}></Navigator>
      ) : null}
    </Container>
  )
}

export default Template
