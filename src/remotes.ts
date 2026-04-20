import type { RemoteComponent } from '@mf-types/fnalabs_assets/compiled-types/types'
import type { IModuleFederation } from '@mf-types/fnalabs_assets/brands/ModuleFederation'
import type { IColumn } from '@mf-types/fnalabs_assets/Column'
import type { IColumns } from '@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '@mf-types/fnalabs_assets/Container'
import type { ISection } from '@mf-types/fnalabs_assets/Section'
import type { IHero } from '@mf-types/fnalabs_assets/Hero'

import type { IServiceWorker } from '@mf-types/fnalabs_assets/ServiceWorker'
import type { IAppLayout } from '@mf-types/fnalabs_assets/AppLayout'
import type { IDirectionLayout } from '@mf-types/fnalabs_assets/DirectionLayout'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS } from './config'

// Brand Icon remote components
export const remoteIconMF = () => loadRemote(`${ASSETS}/brands/ModuleFederation`) as RemoteComponent<IModuleFederation>

// Bulma remote components
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as RemoteComponent<IColumn>
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as RemoteComponent<IColumns>
export const remoteContainer = () => loadRemote(`${ASSETS}/Container`) as RemoteComponent<IContainer>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as RemoteComponent<IHero>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as RemoteComponent<ISection>

// Custom remote components
export const remoteServiceWorker = () => loadRemote(`${ASSETS}/ServiceWorker`) as RemoteComponent<IServiceWorker>
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as RemoteComponent<IAppLayout>
export const remoteDirectionLayout = () => loadRemote(`${ASSETS}/DirectionLayout`) as RemoteComponent<IDirectionLayout>
