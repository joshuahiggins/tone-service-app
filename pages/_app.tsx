import HelmetProd from '@sone-dao/tone-react-helmet'
import SidebarProd from '@sone-dao/tone-react-sidebar'
import UserController from '@sone-dao/tone-react-user-controller'
import type { AppProps } from 'next/app'
import './globals.css'

function ToneApp({ Component, pageProps }: AppProps) {
	const helmet = <HelmetProd />
	const sidebar = <SidebarProd />

	return (
		<UserController>
			{helmet}
			{sidebar}
			<main>
				<Component {...pageProps} />
			</main>
		</UserController>
	)
}

export default ToneApp
