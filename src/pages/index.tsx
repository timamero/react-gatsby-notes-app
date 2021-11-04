import * as React from "react"
import Layout from '../components/Layout'
import '../styles/globalstyle.scss'
import '../styles/styles.scss'
import NotesList from '../components/NotesList';

const IndexPage: React.FC = () => {
  // const indexStyle = {
  //   height: '100vh',
  // }
  return (
    <div className="page has-background-dark has-text-light">
      <Layout>
        <NotesList />
      </Layout>
    </div>
  )
}

export default IndexPage
