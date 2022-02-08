import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.config";
import uuid from "react-native-uuid";
const uploadFiles = async (files = [], userid) => {
  if (!files.length) return [];
  const promises = [];
  const data = [];

  for (const item of files) {
    const img = await fetch(item);
    const bytes = await img.blob();

    const filename = `users-${userid}-${uuid.v4()}`;

    const storageRef = ref(storage, "images/" + filename);
    promises.push(uploadBytes(storageRef, bytes));
  }
  const uploadResults = await Promise.all(promises);
  const downloadURLs = [];

  for (const item of uploadResults) {
    data.push({
      fullPath: item.metadata.fullPath,
      downloadURL: "",
    });
    downloadURLs.push(getDownloadURL(item.ref));
  }

  const downloadURLsResult = await Promise.all(downloadURLs);

  for (var i = 0; i < downloadURLsResult.length; i++) {
    data[i] = downloadURLsResult[i];
  }

  return data;
};
export { uploadFiles };
