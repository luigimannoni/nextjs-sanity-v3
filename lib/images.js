import createImageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../sanity.config'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })
export const urlForImage = (source) => imageBuilder.image(source).auto('format').fit('max')
