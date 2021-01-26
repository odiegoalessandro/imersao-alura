import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {useRouter} from 'next/router'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = React.useState('')

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Alura Quiz</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault()
                router.push(`/quiz?name=${username}`)
              }}>
                <Widget.Input placeholder="Digite seu nome" onChange={
                  (event) => {
                    setUsername(event.target.value)    
                  }
                } />
                <Widget.Button type='submit' disabled={username.length === 0}>Jogar {username}</Widget.Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/odiegoalessandro" />
      </QuizBackground>
    </>
  )
}
