import { z } from 'zod'

export const sortBySchema = z.enum(['name', 'category', 'price'])
export const sortDirSchema = z.enum(['asc', 'desc'])

export const productsSearchSchema = z.object({
  q: z.string().optional().catch(undefined),
  maxPrice: z.number().optional().catch(undefined),
  category: z.string().optional().catch(undefined),
  sortBy: sortBySchema.catch('name').default('name'),
  sortDir: sortDirSchema.catch('asc').default('asc'),
})

export type SortBy = z.infer<typeof sortBySchema>
export type SortDir = z.infer<typeof sortDirSchema>
export type ProductsSearch = z.infer<typeof productsSearchSchema>
