const url = 'https://covid19.mathdro.id/api'

export const fetchDataPerCountry = async (country) => {
    const resp = await fetch(`${url}/countries/${country}`)
    const data = await resp.json()
    return data
}

export const fetchDataGlobal = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data

}

export const fetchCountries = async () => {
    const resp = await fetch(`${url}/countries`)
    const data = await resp.json()
    return data['countries']


}

