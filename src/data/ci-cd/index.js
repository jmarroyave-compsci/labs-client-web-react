import config from 'app/config'
import data from './data.json'
import dataTest from './data.test.json'

export const getCICD = function( ){
	 return (config.TEST) ? dataTest : data;
}