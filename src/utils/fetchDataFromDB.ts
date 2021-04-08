import firebaseConfig from "../firebaseConfig";
const fetchDataFromDB = (language: string) => {
  let dbText = firebaseConfig
    .database()
    .ref(language)
    .orderByKey()
    .limitToLast(1000);
  dbText.on("value", function (snapshot, prevChildKey) {
    return snapshot.val();
  });
};
export default fetchDataFromDB;
