
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
				'border-glow': 'hsl(var(--border-glow))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				surface: 'hsl(var(--surface))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				'surface-glass': 'hsl(var(--surface-glass))',
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
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				// Neon color system
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'neon-blue': 'hsl(var(--neon-blue))',
				'neon-green': 'hsl(var(--neon-green))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'neon-purple': 'hsl(var(--neon-purple))',
				// Legacy support
				molecular: 'hsl(var(--primary))',
				helix: 'hsl(var(--secondary))',
				protein: 'hsl(var(--accent))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-protein': 'var(--gradient-protein)',
				'gradient-helix': 'var(--gradient-helix)',
				'gradient-surface': 'var(--gradient-surface)',
				// Legacy gradients
				'gradient-molecular': 'var(--gradient-helix)',
				'gradient-data': 'var(--gradient-helix)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'protein-rotate': {
					'0%': { transform: 'rotateY(0deg) rotateX(10deg)' },
					'100%': { transform: 'rotateY(360deg) rotateX(10deg)' }
				},
				'particle-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg)', 
						opacity: '0.3' 
					},
					'33%': { 
						transform: 'translateY(-20px) translateX(10px) rotate(120deg)', 
						opacity: '0.7' 
					},
					'66%': { 
						transform: 'translateY(10px) translateX(-15px) rotate(240deg)', 
						opacity: '0.5' 
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.6), 0 0 60px hsl(var(--neon-blue) / 0.3)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'protein-rotate': 'protein-rotate 10s linear infinite',
				'particle-float': 'particle-float 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
