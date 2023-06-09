import { useUserData } from '@sone-dao/tone-react-user-controller'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UploaderPage: NextPage = () => {
	const router = useRouter()
	const { user } = useUserData()

	const releaseId = router.query.releaseId ? router.query.releaseId[0] : ''

	// This will go in a core-ui page component or something we can template out.
	const isAuthed =
		user.roles?.admin == 'super' ||
		user.roles?.admin == 'dev' ||
		user.roles?.owner?.includes(releaseId)
			? true
			: false

	!user.isLoggedIn || (!isAuthed && router.push('/'))

	// helper useEffect
	useEffect(() => {
		//console.log(router)
	}, [router])

	return (
		<>
			<Head>
				<title>Uploader - Tone</title>
			</Head>
			{/*isAuthed && <Uploader />*/}
		</>
	)
}

export default UploaderPage
