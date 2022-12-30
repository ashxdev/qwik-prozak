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
    image?: Image
    category: { data: Category }
    sub_category: { data: SubCategory }
  }
  id: number
}

export interface Image {
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

export interface Category {
  id: number
  attributes: {
    name: string
    description: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    sub_categories: {
      data: SubCategory[]
    }
  }
}

export interface SubCategory {
  id: number
  attributes: {
    name: string
    description: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
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
