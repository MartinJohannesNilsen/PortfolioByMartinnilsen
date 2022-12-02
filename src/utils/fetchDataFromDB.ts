import { db } from "../firebaseConfig";
const fetchDataFromDB = (language: string, setData: (newData: {}) => void) => {
  let dbText = db.ref(language).orderByKey().limitToLast(1000);
  dbText.on("value", function (snapshot, prevChildKey) {
    setData(snapshot.val());
  });
};
export default fetchDataFromDB;
