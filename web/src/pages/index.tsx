import Layout from '@templates/layout';
import Link from 'next/link';

const IndexPage = () => (
  <Layout title="Inicio">
    <h1>Hello world in Practical Learning</h1>
    <Link href="/home">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/signup">Signup</Link>
  </Layout>
);

export default IndexPage;
