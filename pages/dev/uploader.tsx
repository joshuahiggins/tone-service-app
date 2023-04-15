import Uploader from '@sone-dao/tone-react-uploader'
import { NextPage } from 'next'
import Head from 'next/head'

const SearchPage: NextPage = () => (
	<>
		<Head>
			<title>Uploader - Tone</title>
		</Head>
		<Uploader />
	</>
)

export default SearchPage
