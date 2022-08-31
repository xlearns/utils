import {toArray as esmToArray} from '../dist/index.mjs'

function log(...msg){
  console.log(...msg)
}
// esm
log('esm: ',esmToArray(1))
log('esm: ',esmToArray([1]))
log('esm: ',esmToArray({name:1}))

