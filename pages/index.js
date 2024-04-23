import { Avatar, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import GithubInfo from './Components/GithubInfo/GithubInfo'
import Targets from './Components/Targets/Targets'



export default function Home(props) {
  return (
    <>
      <Head>
        <title>Behrouz Sedighi</title>
        <meta name="description" content="I am 24 years old and have 7 years of experience in web software development. I am suitable for working in agile environments and have the ability to meet deadlines precisely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe />
      {props?.data && <GithubInfo data={props?.data} />}
      
      <Targets />
    </>
  )
}






// export async function getStaticProps(context) {
//   async function getContributions(token, username) {
//     const headers = {
//         'Authorization': `bearer ${token}`,
//     }
//     const body = {
//         "query": `query {
//             user(login: "${username}") {
//               name
//               contributionsCollection {
//                 contributionCalendar {
//                   colors
//                   totalContributions
//                   weeks {
//                     contributionDays {
//                       color
//                       contributionCount
//                       date
//                       weekday
//                     }
//                     firstDay
//                   }
//                 }
//               }
//             }
//           }`
//     }
//     const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
//     const data = await response.json()
//     return data
//   }
  
//   const data = await getContributions( TOKEN, username)



//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }