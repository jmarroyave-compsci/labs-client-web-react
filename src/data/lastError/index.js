import config from 'app/config'
import data from './resume.json'
import dataTest from './resume.test.json'

export const getLastError = function( ){
	return (config.TEST) ? dataTest : data;
}

