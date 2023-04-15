import Document, { Head, Html, Main, NextScript } from 'next/document'

class ModdedDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="/css/fontawesome.min.css" rel="stylesheet" />
					<link href="/css/brands.min.css" rel="stylesheet" />
					<link href="/css/sharp-light.min.css" rel="stylesheet" />
					<link
						rel="preload"
						href="/webfonts/inter-300.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/webfonts/inter-400.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/webfonts/inter-700.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default ModdedDocument
