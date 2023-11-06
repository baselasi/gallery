export default async function  fetchData(url,callBack) {
    const dat = await fetch(url)
    const respons = await dat.json()
    callBack(respons)
}