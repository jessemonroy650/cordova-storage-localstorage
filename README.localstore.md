/*  Date: 2016-03-07 */

function           | Description
-------------------|------------------------
test([id])         | Test for `localStorage` library. Writes result to node with `id` (optional), and returns boolean from test.
len()              | returns number of storage-objects available
clear()            | Removes all storage-objects from database.
put(key, value)    | Write key/value pair to local storage
get(key)           | Returns value or emtpy string ('')
update(obj)        | Equivalent to remove(obj.id); puts(obj.key,obj.value). Pass-in as  obj={id,key,value}
key(num)           | Returns storage-object in the ordinal position
remove(key)        | Removes the storage-object with the associated key
isStorageAvailable | Test for `localStorage` library. if available, return `true`, else `false`.
