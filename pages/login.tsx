import Placeholder from '@sone-dao/sone-react-placeholder'
import { useUserData } from '@sone-dao/tone-react-user-controller'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const LoginPage: NextPage = () => {
	const router = useRouter()
	const { setUser } = useUserData()

	useEffect(() => {
		const sessionToken = localStorage.getItem('tone.session')

		const email = router.query.email as string
		const nonce = router.query.nonce as string

		if (email && nonce) {
			if (!sessionToken) {
				authNonce(email, nonce)
			} else {
				console.log('Session token found.')
			}
		}
	}, [router])

	return (
		<>
			<Head>
				<title>Login - Tone</title>
			</Head>
			<Placeholder display="Page: Login" height="100%" color="#00A30D" />
		</>
	)

	async function authNonce(email: string, nonce: string) {
		const additionalData = {
			userAgent: navigator.userAgent,
		}

		await fetch('https://api.tone.audio/auth/nonce', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, nonce, additionalData }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				if (data.ok) {
					setUser({ ...data.user, isLoggedIn: true })
					sessionStorage.setItem('tone.access', data.accessToken)
					localStorage.setItem('tone.session', data.sessionToken)
				}
			})
			.catch((error) => console.log(error))
	}
}

export default LoginPage
