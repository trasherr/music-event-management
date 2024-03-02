import { JsonDB, Config } from 'node-json-db';
import fs from 'fs';


fs.access("./MusicEventDB.json", (err) => {

    if (err && err.code === 'ENOENT') {

        fs.writeFile("MusicEventDB.json", "{ \"userEntity\": {\"key\": 1, \"users\":[]},\"eventEntity\": {\"key\": 1, \"events\":[]}}", (err) => {
            if (err) throw err; // Handle errors
            console.log('DB File created successfully!');
          });

      } 
      
      
      else {
        console.log(err);
      }
  });

const db = new JsonDB(new Config("MusicEventDB", true, true, '/'));
export default db;