import * as React from "react"
import Layout from '../components/Layout'
import '../styles/globalstyle.scss'
import '../styles/styles.scss'
import NotesList from '../components/NotesList';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Layout>
        <NotesList />
      </Layout>
    </div>
  )
}

export default IndexPage
