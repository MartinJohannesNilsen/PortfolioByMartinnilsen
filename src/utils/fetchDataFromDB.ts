import { db } from "../firebaseConfig";
const fetchDataFromDB = (key: string, setData: (newData: {}) => void) => {
  let dbText = db.ref(key).orderByKey().limitToLast(1000);
  dbText.on("value", function (snapshot, prevChildKey) {
    setData(snapshot.val());
  });
};
export default fetchDataFromDB;
