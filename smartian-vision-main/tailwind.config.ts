import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Indian theme colors for Coders Dabha
				indian: {
					saffron: 'hsl(var(--saffron))',
					orange: 'hsl(var(--deep-orange))',
					green: 'hsl(var(--forest-green))',
					turmeric: 'hsl(var(--turmeric))',
					cardamom: 'hsl(var(--cardamom))',
					paprika: 'hsl(var(--paprika))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-spice': 'var(--gradient-spice)'
			},
			boxShadow: {
				'warm': 'var(--shadow-warm)',
				'warm-strong': 'var(--shadow-warm-strong)',
				'spice': 'var(--shadow-spice)',
				'ambient': 'var(--shadow-ambient)'
			},
			fontFamily: {
				'heading': 'var(--font-heading)',
				'body': 'var(--font-body)',
				'poppins': ['Poppins', 'sans-serif'],
				'mukti': ['Mukti', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': 'var(--radius-lg)',
				'2xl': 'var(--radius-xl)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
				'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'pulse-warm': {
					'0%': {
						'box-shadow': '0 0 5px hsl(25, 95%, 65%), 0 0 10px hsl(25, 95%, 65%), 0 0 15px hsl(25, 95%, 65%)'
					},
					'100%': {
						'box-shadow': '0 0 10px hsl(25, 95%, 65%), 0 0 20px hsl(25, 95%, 65%), 0 0 30px hsl(25, 95%, 65%)'
					}
				},
				'glow': {
					'0%': {
						'text-shadow': '0 0 5px hsl(25, 95%, 65%), 0 0 10px hsl(25, 95%, 65%)'
					},
					'100%': {
						'text-shadow': '0 0 10px hsl(25, 95%, 65%), 0 0 20px hsl(25, 95%, 65%), 0 0 30px hsl(25, 95%, 65%)'
					}
				},
				'shimmer': {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0px)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-5px)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
