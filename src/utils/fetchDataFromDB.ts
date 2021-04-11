import firebaseConfig from "../firebaseConfig";
const fetchDataFromDB = (language: string, setData: (newData: {}) => void) => {
  let dbText = firebaseConfig
    .database()
    .ref(language)
    .orderByKey()
    .limitToLast(1000);
  dbText.on("value", function (snapshot, prevChildKey) {
    setData(snapshot.val());
  });
};
export default fetchDataFromDB;
