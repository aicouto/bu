'use strict'

import { Component } from 'react'
import 'isomorphic-fetch'

import Page from './../../layouts/page'
import Row from './../../components/row'
import Job from './../../components/job'
import Back from './../../components/back'
import Footnotes from './../../components/footnotes'
import Separator from './../../components/separator'
import work from './../../data/work'
import { colors, typography } from './../../theme'

class WorkExperience extends Component {
  static async getInitialProps() {
    const api = 'https://api.npms.io/v2/search?q=maintainer'
    const username = 'bukinoshita'
    const size = 250
    const offset = 0
    const res = await fetch(`${api}:${username}&size=${size}&from=${offset}`)
    const pkgs = await res.json()

    return { pkgs }
  }

  render() {
    const { total } = this.props.pkgs
    const list = work.map(w => <Job key={w.company} data={w} />)
    const footnotes = [
      {
        title: 'Education',
        description: `Learn more about my education. Where and how I've been studying my whole life.`,
        href: '/'
      },
      {
        title: 'Blog',
        description: `Sometimes I like to write about code and share my knowledge to learn/teach other people.`,
        href: '/blog'
      }
    ]

    return (
      <Page color="#000">
        <Back />

        <Row>
          <header>
            <h1>work experience</h1>

            <h2>Currently</h2>
            <p>
              <strong>open sourcerer:</strong> I've been developing a bunch of
              nodejs modules, I have{' '}
              <a href="https://www.npmjs.com/~bukinoshita">
                {total} packages
              </a>{' '}
              published on npm and the most popular one has{' '}
              <a href="https://www.npmjs.com/package/react-cookies">
                17K+ downloads
              </a>.
            </p>

            <p>
              <strong>entrepreneur: </strong>Building{' '}
              <a href="https://franz.sh">franz</a> and{' '}
              <a href="https://inkblee.com">inkblee</a> by myself and with
              friends.
            </p>

            <p className="italic">
              * Also built Embrace Open Source (9K+ users), Ritoplz (4K+ users)
              and Tweetstockr (5K+ users).
            </p>
          </header>

          <ul>
            {list}
          </ul>

          <Separator />

          <Footnotes footnotes={footnotes} />
        </Row>

        <style jsx>{`
          header {
            text-align: center;
          }

          h1 {
            color: ${colors.white};
            font-weight: 500;
            font-size: ${typography.f16};
            margin-bottom: 50px;
          }

          h2 {
            color: ${colors.white};
            margin-top: 30px;
            font-weight: ${typography.bold};
            text-transform: uppercase;
            font-size: ${typography.f12};
            line-height: 24px;
            text-align: left;
            margin-bottom: 5px;
          }

          p {
            color: ${colors.subtitle};
            font-weight: ${typography.regular};
            font-size: ${typography.f14};
            line-height: 24px;
            text-align: left;
            margin-bottom: 10px;
          }

          strong,
          a {
            color: ${colors.white};
            font-weight: ${typography.bold};
          }

          a {
            text-decoration: underline;
          }

          ul {
            margin-top: 50px;
          }

          .italic {
            font-size: ${typography.f12};
            font-style: italic;
            margin-top: 15px;
          }
        `}</style>
      </Page>
    )
  }
}

export default WorkExperience
