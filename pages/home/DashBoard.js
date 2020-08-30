import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&apikey=8d2de98e089f1c28e1a22fc19a24ef04')
    const posts = await res.json()
    var temperature = posts.main.temp;
    var visibility = posts.visibility;
    var speed = posts.wind.speed;
    var date = posts.dt;
    var base = posts.base;
    return {
        props: {
            posts,
        },
    }
}
export default function Dashboard({posts}) {
    return (
       <>
            <span>Visibility : {posts.visibility}</span><br></br>
            <span>Temperature : {posts.temperature}</span><br></br>
            <span>Date : {posts.date}</span><br></br>
            <span>Speed : {posts.speed}</span><br></br>
            <span>Base : {posts.base}</span>
      </>
    )
    }