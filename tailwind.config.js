module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        peachBg: '#f6efe8',
        borderColor: '#ebeaeb',
        darkBlue: '#4285f4',
        buttonColor: '#611f69',
        sidebarColor: '#400d40',
        sidebarHighlightColor: '#1264a3',
        attachmentColor: '#1d1d1d',
        articleTheme: {
          primary: '#4a154b',
          secondary: '#fff',
        },
      },
      screens: {
        cta: '285px',
        miniDesktop: '1007px',
        desktop: '1085px',
        xlDesktop: '1173px',
        xxlDesktop: '1283px',
      },
      gridTemplateColumns: {
        xlDesktop: '40%, 55%',
        section: '48.1% 40%',
        section2: '40.2% 48.7%',
        moment: 'repeat(2, minmax(311px, 50%))',
        videoSnippet: 'repeat(2, minmax(50%, 225px))',
      },
      margin: {
        xxl: '1300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
