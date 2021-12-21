module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
	  backgroundColor:theme=>({
		white: '#fff',
		blue: theme('colors.blue'),
		gray: theme('colors.gray'),
		red: theme('colors.red'),
		transparent:' transparent',
	  }),
    borderColor: theme => ({
		white: '#fff',
		blue: theme('colors.blue'),
		gray: theme('colors.gray'),
		red: theme('colors.red'),
		transparent:' transparent',
	}),
    borderWidth: {
			'1': '1px',
			'0': '0',
		},
    
		borderRadius: {
			none: '0',
			'sm':'4px',
			'md':'8px',
      'lg':'10px',
      'xl':'14px',
      'xxl':'18px',
			full: '9999px',
		},
    colors:{
      white: '#ffffff',
      blue: {
				'100':'#f2faff',
        '200': '#cbe5ff',
				'300': '#4BA4FD',
				'400': '#5688FD',
			},
      gray: {
        '50':'#f9fafb',
				'100': '#eaeaea',
				'200': '#dedede',
				'300': '#cecece',
        '400': '#b2b2b2',
        '500': '#888888',
        '600': '#171717',
			},
      red: {
				'100': '#F7D2D6',
				'200': '#EFA6AD',
				'300': '#DF4D5B',
				'400': '#d04250',
			},
    },
    fontFamily: {
			rubik: [
				'Rubik',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			ubuntu: [
				'ubuntu',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
    fontSize: {
      xxs: '10px',
			xs: '0.75rem', // 12px
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '2rem', // 32px
			'4xl': '2.5rem', //40px
			'5xl': '3rem', // 48px
			'6xl': '3.5rem', // 56px
			'7xl': '6rem', // 96px
		},
		fontWeight: {
      light: '300',
			normal: '400',
      medium: '500',
			bold: '600',
		},
    spacing: {
			'0': '0',
			'1': '1px',
			'2': '2px',
			'4': '0.25rem',
			'6': '0.375rem',
			'8': '0.5rem',
			'10': '0.6rem',
			'12': '0.75rem', // FOR CONTAINER PADDING ONLY ABOVE TABLET
			'14': '0.875rem', //14px
			'16': '1rem', // 16px
      '18': '1.125rem', // 18px
			'20': '1.25rem', // 20px
			'24': '1.5rem', // 24px
			'28': '1.75rem', // 24px
			'32': '2rem', // 32px
			'40': '2.5rem', //40px
			'48': '3rem', //48px
			'56': '3.5rem', // 56px
      '60': '3.75rem', // 56px
			'64': '4rem', // 64px
			'76': '4.75rem', // 76px
			'80': '5rem', // 80px
			'96': '6rem', // 96px
			'112': '7rem', // 112px
			'144': '9rem', // 144px
			'160': '10rem', //160px
			'192':'12rem', //192px
			'256':'16rem', //256px
    },
    
    extend: {
      container:({
				center: true,
			}),
    },
  },
  plugins: [],
}
