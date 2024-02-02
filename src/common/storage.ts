import { Problem } from "./class";
import { StorageKey } from "./enum";

const getByKey = async (key: string): Promise<any> => {
  return await new Promise((resolve) => {
    chrome.storage.local.get([key]).then((result) => resolve(result[key]));
  });
};

const setByKey = async (key: string, value: any) => {
  return await new Promise((resolve) => {
    chrome.storage.local.set({ [key]: value }).then(() => resolve);
  });
};

export const getSavedProblem = async (): Promise<Problem | undefined> => {
  return await getByKey(StorageKey.SAVED_PROBLEM);
};

export const setSavedProblem = async (problem: Problem) => {
  await setByKey(StorageKey.SAVED_PROBLEM, problem);
};

export const getNotionAccessToken = async (): Promise<string | undefined> => {
  return await getByKey(StorageKey.NOTION_ACCESS_TOKEN);
};

export const setNotionAccessToken = async (notionAccessToken: string) => {
  await setByKey(StorageKey.NOTION_ACCESS_TOKEN, notionAccessToken);
};

export const getOAuthProcessStatus = async () => {
  return await getByKey(StorageKey.OAUTH_PROCESS_STATUS);
};

export const setOAuthProcessStatus = async (status: boolean) => {
  await setByKey(StorageKey.OAUTH_PROCESS_STATUS, status);
};
