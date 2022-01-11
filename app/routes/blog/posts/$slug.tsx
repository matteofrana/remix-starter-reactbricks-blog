import { useContext } from 'react'
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
} from 'react-bricks/frontend'
import { useLoaderData } from 'remix'

export const loader = async ({ params }: { params: { slug: string } }) => {
  try {
    const page = await fetchPage(params.slug, process.env.API_KEY as string)
    return { page }
  } catch {
    throw new Error(`Cannot find the "${params.slug}" post.`)
  }
}

const Page = () => {
  const { page } = useLoaderData()
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext)
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return <PageViewer page={pageOk} />
}

export default Page
