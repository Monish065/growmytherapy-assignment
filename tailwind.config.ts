import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#24333A', sage:'#667D72', sand:'#F4EFE7', cream:'#FBF9F5', terracotta:'#B97862' }, fontFamily:{sans:['Arial','sans-serif'], serif:['Georgia','serif']} } }, plugins: [] }
export default config
