'use client'
import GjsEditor from '@grapesjs/react'
import { grapesjs } from 'grapesjs'

const App = () => (
  <GjsEditor
    grapesjs={grapesjs}
    grapesjsCss='https://unpkg.com/grapesjs/dist/css/grapes.min.css'
    options={{
      height: '100vh',
      projectData: {
        pages: [{ name: 'Home page', component: `<p>Try drag & drop components here</p>` }]
      }
    }}
    plugins={[{ id: 'gjs-blocks-basic', src: 'https://unpkg.com/grapesjs-blocks-basic' }]}
  />
)

export default App
