const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'hl710q4f',
  dataset: 'production',
  apiVersion: '2020-06-29', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;