import { Outlet } from 'remix'
import Layout from '~/components/Layout'
import ErrorMessage from '~/components/ErrorMessage'

export default function Blog() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Layout>
      <ErrorMessage error={error} />
    </Layout>
  )
}
