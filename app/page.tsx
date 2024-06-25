'use client'
import * as React from 'react'
import GjsEditor, { AssetsProvider, Canvas, ModalProvider } from '@grapesjs/react'
import type { EditorConfig } from 'grapesjs'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CustomModal from './components/CustomModal'
import AssetManager from './components/AssetManager'
import Topbar from './components/Topbar'
import RightSidebar from './components/RightSidebar'

const theme = createTheme({ palette: { mode: 'dark' } })

const gjsOptions: EditorConfig = {
  height: '100vh',
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  projectData: {
    assets: [
      'https://via.placeholder.com/350x250/78c5d6/fff',
      'https://via.placeholder.com/350x250/459ba8/fff',
      'https://via.placeholder.com/350x250/79c267/fff',
      'https://via.placeholder.com/350x250/c5d647/fff',
      'https://via.placeholder.com/350x250/f28c33/fff'
    ],
    pages: [
      {
        name: 'Home page',
        component: `<h1>Try drag & drop components here</h1>`
      }
    ]
  }
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GjsEditor
      className='gjs-custom-editor'
      grapesjs='https://unpkg.com/grapesjs'
      grapesjsCss='https://unpkg.com/grapesjs/dist/css/grapes.min.css'
      options={gjsOptions}
      plugins={[{ id: 'gjs-blocks-basic', src: 'https://unpkg.com/grapesjs-blocks-basic' }]}
      onEditor={editor => ((window as any).editor = editor)}>
      <div className='flex h-full bg-black text-white'>
        <div className='gjs-column-m flex flex-col flex-grow'>
          <Topbar className='min-h-[48px]' />
          <Canvas className='flex-grow gjs-custom-editor-canvas' />
        </div>
        <RightSidebar className='gjs-column-r w-[300px]' />
      </div>
      <ModalProvider>
        {({ open, title, content, close }) => (
          <CustomModal open={open} title={title} close={close}>
            {content}
          </CustomModal>
        )}
      </ModalProvider>
      <AssetsProvider>
        {({ assets, select, close, Container }) => (
          <Container>
            <AssetManager assets={assets} select={select} close={close} />
          </Container>
        )}
      </AssetsProvider>
    </GjsEditor>
  </ThemeProvider>
)

export default App
