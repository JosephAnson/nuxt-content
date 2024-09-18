import type { ZodObject, ZodRawShape } from 'zod'
import type { MountOptions } from './source'

export interface PageCollections {
}
export interface Collections {
}

export type CollectionType = 'page' | 'data'

export type CollectionSource = MountOptions

export interface Collection<T extends ZodRawShape = ZodRawShape> {
  type?: CollectionType
  source?: string | CollectionSource
  schema: ZodObject<T>
}

export interface ResolvedCollection<T extends ZodRawShape = ZodRawShape> {
  name: string
  pascalName: string
  type: CollectionType
  source: CollectionSource | undefined
  schema: ZodObject<T>
  table: string
  generatedFields: {
    raw: boolean
    body: boolean
    path: boolean
  }
  jsonFields: string[]
}

export interface CollectionInfo {
  name: string
  pascalName: string
  jsonFields: string[]
  type: CollectionType
}
