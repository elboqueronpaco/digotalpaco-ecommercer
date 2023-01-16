import React from 'react'
import { BlogComponent } from '../components/BlogComponent'

import Layout from '../hocs/Layout'

const BlogPage = () => {
  return (
    <Layout>
      <BlogComponent />
    </Layout>
  )
}

export default BlogPage