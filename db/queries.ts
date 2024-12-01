
export const get = async (url: string) => {
    let res = await fetch(url, {
     //   cache: 'force-cache'
    })
    return await res.json()
}


export const severalQueries = (urls:string[]) =>{

    return Promise.all(urls.map(url => get(url)))
    
}