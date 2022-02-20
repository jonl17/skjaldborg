import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Schedule from '../pageComponents/Schedule'

const Dagskra = ({ data: { ekki_myndir, frumsyningar, verk_i_vinnslu } }) => {
  const [schedule, setSchedule] = useState(undefined)
  useEffect(() => {
    let list = []
    ekki_myndir.nodes.forEach((item) =>
      list.push({
        title: item.frontmatter.title,
        title_en: item.frontmatter.title_en,
        dagsetning: new Date(item.frontmatter.dagsetning),
        movie: false,
        wip: false,
      })
    )
    frumsyningar.nodes.forEach((item) => {
      item.frontmatter.dagskra.forEach((d) =>
        list.push({
          title: item.frontmatter.title,
          title_en: item.frontmatter.title_en,
          dagsetning: new Date(d),
          movie: true,
          frontmatter: { ...item.frontmatter },
          html: item.html,
          wip: false,
        })
      )
    })
    verk_i_vinnslu.nodes.forEach((item) => {
      item.frontmatter.dagskra.forEach((d) =>
        list.push({
          title: item.frontmatter.title,
          title_en: item.frontmatter.title_en,
          dagsetning: new Date(d),
          movie: true,
          frontmatter: { ...item.frontmatter },
          html: item.html,
          wip: true,
        })
      )
    })

    list.sort((a, b) => a.dagsetning - b.dagsetning)

    setSchedule({
      friday: list.filter((item) => item.dagsetning.getDate() === 31),
      saturday: list.filter((item) => item.dagsetning.getDate() === 1),
      sunday: list.filter((item) => item.dagsetning.getDate() === 2),
    })
  }, [ekki_myndir, frumsyningar, verk_i_vinnslu])
  return <>{schedule && <Schedule schedule={schedule} />}</>
}

export const query = graphql`
  {
    ekki_myndir: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/dagskra/" } }
      sort: { fields: frontmatter___dagsetning }
    ) {
      nodes {
        frontmatter {
          title
          title_en
          dagsetning
        }
      }
    }
    frumsyningar: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/frumsyningar/" } }
    ) {
      nodes {
        html
        frontmatter {
          title
          title_en
          dagskra
          length_in_min
        }
      }
    }
    verk_i_vinnslu: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
    ) {
      nodes {
        html
        frontmatter {
          title
          title_en
          dagskra
          length_in_min
        }
      }
    }
  }
`

export default Dagskra
