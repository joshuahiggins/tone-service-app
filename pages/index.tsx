import Placeholder from '@sone-dao/sone-react-placeholder'
import { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => (
	<>
		<Head>
			<title>Home - Tone</title>
		</Head>
		<Placeholder display="Page: Home" height="100%" color="#00A30D" />
	</>
)

export default HomePage
