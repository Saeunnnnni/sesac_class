const API_KEY = process.env.REACT_APP_API_KEY;





export const videoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}
`

export function searchUrl(input){
return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&q=${input}regionCode=kr&key=${API_KEY}
`
}