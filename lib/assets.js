import { getFileAsset } from '@sanity/asset-utils'
import { projectId, dataset } from '../sanity.config'

export const urlForAsset = (source) => getFileAsset(source, { projectId, dataset })
