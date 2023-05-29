const size = {
  mobile: '600px',
  tablet: '900px',
  //laptop: '1200px',
  desktop: '1200px',
}

const theme = {
  color: {
    primary: '#009688',
    success: '#00bcd4',
    danger: 'crimson'
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  minTablet: `(min-width: ${size.tablet})`,
 // laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default theme