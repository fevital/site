/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				display: ['Arquivo', 'system-ui', 'sans-serif'],
				sans: ['Arquivo', 'system-ui', 'sans-serif'],
			},
			colors: {
				ink: '#201e1d',
				paper: '#f3f2f2',
				surface: '#EAE9E9',
				accent: '#EC3013',
				brand: {
					50: '#fff1f1',
					100: '#ffe0e0',
					200: '#ffc2c2',
					300: '#ff9c9c',
					500: '#FF1616',
					600: '#f00b0b',
					700: '#d10505',
					800: '#b00404',
					900: '#FF1616',
				},
				whatsapp: {
					DEFAULT: '#25D366',
					dark: '#1ebe57',
					deep: '#128C7E',
				},
				slate: {
					50: '#f9f8f8',
					100: '#f3f2f2',
					200: '#e4e2e1',
					300: '#cfcccb',
					400: '#a09c9a',
					500: '#6f6b69',
					600: '#3d3a39',
					700: '#201e1d',
					800: '#201e1d',
					900: '#151413',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				sidebar: {
					'DEFAULT': 'hsl(var(--sidebar-background))',
					'foreground': 'hsl(var(--sidebar-foreground))',
					'primary': 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					'accent': 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					'border': 'hsl(var(--sidebar-border))',
					'ring': 'hsl(var(--sidebar-ring))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 38s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
