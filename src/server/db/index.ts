import * as  mysql from 'mysql'
import config from '../config'
//import queries
import Events from './queries/events'

export const pool = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

export default{
    Events
}