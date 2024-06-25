import * as React from 'react'
import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider
} from '@grapesjs/react'
import { mdiBrush, mdiLayers, mdiViewGridPlus, mdiTextBoxMultiple, mdiCog } from '@mdi/js'
import Icon from '@mdi/react'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import BlockManager from './BlockManager'
import { cn } from './common'
import PageManager from './PageManager'
import LayerManager from './LayerManager'
import SelectorManager from './SelectorManager'
import StyleManager from './StyleManager'
import TraitManager from './TraitManager'

const defaultTabProps = {
  className: '!min-w-0'
}

export default function RightSidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className={cn('gjs-right-sidebar flex flex-col', className)}>
      <Tabs value={selectedTab} onChange={(_, v) => setSelectedTab(v)} variant='fullWidth'>
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiBrush} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiCog} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiLayers} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiViewGridPlus} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiTextBoxMultiple} />} />
      </Tabs>
      <div className='overflow-y-auto flex-grow'>
        {selectedTab === 0 && (
          <>
            <SelectorsProvider>{props => <SelectorManager {...props} />}</SelectorsProvider>
            <StylesProvider>{props => <StyleManager {...props} />}</StylesProvider>
          </>
        )}
        {selectedTab === 1 && (
          <TraitsProvider>{props => <TraitManager {...props} />}</TraitsProvider>
        )}
        {selectedTab === 2 && (
          <LayersProvider>{props => <LayerManager {...props} />}</LayersProvider>
        )}
        {selectedTab === 3 && (
          <BlocksProvider>{props => <BlockManager {...props} />}</BlocksProvider>
        )}
        {selectedTab === 4 && <PagesProvider>{props => <PageManager {...props} />}</PagesProvider>}
      </div>
    </div>
  )
}
