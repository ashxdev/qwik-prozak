export interface PostI {
  attributes: {
    name: string
    slug: string
    description: string
    short_description?: string
    type: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    publish_date: string
    image?: ImageI
    category: { data: CategoryI }
  }
  id: number
}

export interface ImageI {
  data?: {
    attributes: {
      name: string
      url: string
      formats: {
        medium: {
          url: string
          name: string
        }
        small: {
          url: string
          name: string
        }
        thumbnail: {
          url: string
          name: string
        }
      }
    }
  }
}

export interface CategoryI {
  id: number
  attributes: {
    name: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    description: string
    short_description: string
  }
}

export interface Homepage {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    header_add: { id: number; html: string }
    header_menu_add: {
      id: number
      html: string
    }
  }
}
