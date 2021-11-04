import * as React from "react"
import Layout from '../components/Layout'
import NewNote from "../components/NewNote"

const CreatePage: React.FC = () => {
  // const indexStyle = {
  //   height: '100vh',
  // }
  return (
    <div className="page has-background-dark has-text-light">
      <Layout>
        <NewNote />
      </Layout>
    </div>
  )
}

export default CreatePage