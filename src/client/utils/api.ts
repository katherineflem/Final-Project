
export let AccessToken: string = localStorage.getItem('token') || null


export const json = async <T = any>(url: string, method: string = 'GET', body?: {}) => {
    let headers: any = {
        'Content-type': 'application/json'
    }
    if (AccessToken) {
        headers['Authorization'] = `Bearer ${AccessToken}`
        try {
            let result = await fetch(url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            if (result.ok) {
                return <T>(await result.json())
            } else {
                return false;
            }
        } catch (e) {
            console.log(e)
        }
    }
}