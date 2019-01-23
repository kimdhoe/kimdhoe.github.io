/** @jsx jsx */

// !!! TODO
// Please clean up this mess...

import React from 'react'
import { Link, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'
import * as Feather from 'react-feather'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import { sol } from '../services'

const sideProjects = [
  {
    name: "Sol LeWitt's Wall Drawings",
    link: '/sol-lewitt',
    public: true,
  },
  {
    name: 'How to Make Snake Game (Beta)',
    link: 'https://kimdhoe.github.io/how-to-make-snake-game',
    external: true,
    public: true,
  },
  {
    name: 'Josa',
    link: 'https://github.com/kimdhoe/josa',
    external: true,
    public: true,
  },
  {
    name: 'JavaScript Koans (Beta)',
    link: 'https://kimdhoe.github.io/jskoans',
    external: true,
    public: true,
  },
  {
    name: 'Mahjong Solitaire',
    link: 'https://kimdhoe.github.io/mahjong-solitaire',
    external: true,
    public: true,
  },
  {
    name: 'Front-end Daily (work in progress)',
    link: 'https://kimdhoe.github.io/frontend-daily',
    external: true,
    public: false,
  },
  {
    name: 'MeonJi',
    link: 'https://github.com/kimdhoe/meonji',
    external: true,
    public: true,
  },
  {
    name: '(번역) Sass Guidelines by Hugo Giraudel',
    link: 'https://sass-guidelin.es/ko',
    external: true,
    public: true,
  },
]

const sss = {
  h2: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.3em 0 0.8em 0',
    letterSpacing: 0.5,
    fontSize: '1.1em',
    fontWeight: 500,
    color: '#333',
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  listItem: {
    margin: '0 0 0.5em 0',
    borderRadius: 5,
  },
  link: {
    display: 'block',
    padding: '0.7em 1.1em',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    textDecoration: 'none',
    backgroundColor: '#f8f9fa',
    color: 'black',
    ':hover': {
      backgroundColor: '#f1f3f5',
    },
  },
  noLink: {
    display: 'block',
    padding: '0.7em 1.1em',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: '#999',
    backgroundColor: '#f8f9fa',
  },
}

export default ({ data }) => (
  <Layout>
    <Helmet defaultTitle={'dhk.party'}>
      <link rel={'canonical'} href={'https://dhk.party'} />
      <meta name={'description'} content={'프론트엔드 개발자 김동희입니다. 프로그래밍, 혹은 그에 대한 개인적인 경험을 기록합니다.'} />
      <meta property={'og:title'} content={'dhk.party'} />
      <meta property={'og:description'} content={'프론트엔드 개발자 김동희입니다. 프로그래밍, 혹은 그에 대한 개인적인 경험과 결과물을 기록합니다.'} />
      <meta property={'og:site_name'} content={'dhk.party'} />
      <meta property={'og:title'} content={'김동희'} />
      <meta property={'og:type'} content={'website'} />
      <meta property={'og:image'} content={'https://dhk.party/static/sol-88-0ea33b20076949c13277bb11f769b920.png'} />
    </Helmet>
    <div css={{
      display: 'flex',
      '@media (max-width: 768px)': {
        flexWrap: 'wrap',
      }
    }}>
      <div css={{
        marginRight: 50,
        marginBottom: '1em',
        width: 300,
        '@media (max-width: 768px)': {
          marginRight: 0,
          width: '100%',
        }
      }}>
      <div css={{ marginBottom: '3em' }}>
        <h2 css={[ sss.h2 ]}>
          김동희,{' '}
          <span
            css={{
              paddingLeft: '0.5em',
              textDecoration: 'underline',
              fontWeight: 400,
              fontSize: '0.95em',
            }}
          >
            {' '}front-end engineer
          </span>
        </h2>
      </div>

      <h2 css={[ sss.h2 ]}>
        <Feather.Moon css={{ marginRight: '0.5em' }} color={'#222'} size={19} />
        side projects
      </h2>
      <ul css={[ sss.list ]}>
        {sideProjects.map((project, i) => (
          <li key={i} css={[ sss.listItem ]}>
            {project.public ? (
              project.external ? (
                <a css={[ sss.link ]} href={project.link}>
                  {project.name}
                </a>
              ) : (
                <Link css={[ sss.link ]} to={project.link}>
                  {project.name}
                </Link>
              )
            ) : (
              <span css={[ sss.noLink ]}>
                {project.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div css={{
        flex: 1,
    }}>
    <h2 css={[ sss.h2 ]}>
      <Feather.FileText css={{ marginRight: '0.5em' }} color={'#222'} size={18} />
      blog
    </h2>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Entry
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.frontmatter.excerpt}
        />
      ))}
    </div>
    <h2 css={[ sss.h2 ]}>
      <Feather.Sunrise css={{ marginRight: '0.5em' }} color={'#222'} size={19} />
      generative artistry
    </h2>
    <div>
      {sol.works.map(({ type, number, year, createdAt, image }, i) => (
        <SolLeWittEntry
          key={i}
          type={type}
          number={number}
          year={year}
          image={image}
          createdAt={createdAt}
        />
      ))}
    </div>
  </div>
</div>
  </Layout>
)

const SolLeWittEntry = ({ type, number, year, createdAt, image }) => {
  const typeForTitle = type.split(/ +/).map(s => s[0].toUpperCase() + s.slice(1)).join(' ')
  const title = `${typeForTitle} #${number}`

  return (
    <Link css={{ textDecoration: 'none' }} to={`/sol-lewitt/wall-drawing-${number}`}>
      <div css={[ solStyles.container ]}>
        <div css={[ solStyles.imageContainer ]}>
          <img
            css={[ solStyles.image ]}
      src={image}
      alt={`Sol LeWitt ${title}`}
    />
  </div>
  <div css={[ solStyles.headingContainer ]}>
    <div css={[ solStyles.createdAt ]}>
      <p>{createdAt}</p>
    </div>
    <h3 css={[ solStyles.heading ]}>
      <span css={[ solStyles.name ]}>
        Sol LeWitt
      </span>
      <span css={[ solStyles.titleAndYear ]}>
        <span css={[ solStyles.title ]}>
          {title},{' '}
        </span>
        <span css={[ solStyles.year ]}>
          {year}
        </span>
      </span>
      <span css={[ solStyles.medium ]}>
        HTML Canvas
      </span>
    </h3>
  </div>
</div>
  </Link>
  )
}

const solStyles = {
  container: {
    marginBottom: '0.7em',
    display: 'flex',
    alignItems: 'center',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.5em',
    height: '100%',
    lineHeight: 1.3,
    color: '#ced4da',
  },
  createdYear: {
    margin: 0,
    padding: 0,
    fontSize: '0.75em',
    textAlign: 'center',
    color: '#ced4da',
  },
  createdDate: {
    margin: 0,
    padding: 0,
    fontWeight: 700,
    fontSize: '2em',
    textAlign: 'center',
  },
  imageContainer: {
    marginRight: '1em',
    width: 90,
    height: 90,
    border: '2px solid #444',
  },
  image: {
    width: '100%',
  },
  headingContainer: {
    position: 'relative',
    flex: 1,
  },
  heading: {
    position: 'relative',
    margin: 0,
    padding: '1em 0',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1em',
    color: '#333',
  },
  name: {
    fontSize: '1.1em',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  titleAndYear: {
    marginTop: '0.4em',
    fontWeight: 500,
  },
  title: {
    fontStyle: 'italic',
    fontFamily: 'Georgia',
  },
  year: {
    fontWeight: 400,
    fontSize: '0.95em',
  },
  medium: {
    marginTop: '0.4em',
    fontWeight: 400,
    fontSize: '0.95em',
  },
  createdAt: {
    position: 'absolute',
    right: 0,
    top: '50%',
    lineHeight: 1,
    textAlign: 'right',
    transform: 'translateY(-50%)',
    fontSize: '2.5em',
    fontWeight: 800,
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    color: '#e9ecef',
  },
}

const __Date = css({
  margin: 0,
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  fontSize: '0.8em',
  color: '#777',
})
const Date = ({ date }) => (
  <p css={__Date}>
    {date}
  </p>
)

const __Title = css({
  position: 'relative',
  marginBottom: '0.3em',
})
const __Title_title = css({
  margin: '0',
  fontWeight: 400,
})
const Title = ({ title }) => (
  <div css={__Title}>
    <h3 css={__Title_title}>
      {title}
    </h3>
  </div>
)

const __Excerpt = css({
  margin: 0,
  marginBottom: '0.3em',
})
const Excerpt = ({ text }) => (
  <p css={__Excerpt}>
    {text}
  </p>
)

const Entry = ({ title, date, excerpt, slug }) => (
  <div css={__Entry}>
    <Link css={__Entry_link} to={slug}>
      <Title title={title} />
      <Excerpt text={excerpt} />
      <Date date={date} />
    </Link>
  </div>
)
const __Entry_circle1 = css({
  position: 'absolute',
  top: '-40px',
  left: '-40px',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.2s ease',
})
const __Entry = css({
  position: 'relative',
  paddingBottom: '2em',
  [`:hover .${__Entry_circle1}`]: {
    backgroundColor: 'tomato',
    opacity: 0.4,
    transform: 'translateY(0)',
  }
})
const __Entry_link = css({
  position: 'relative',
  zIndex: 9,
  textDecoration: 'none',
  color: '#444',
})

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          excerpt
        }
        fields {
          slug
        }
      }
    }
  }
}
`
