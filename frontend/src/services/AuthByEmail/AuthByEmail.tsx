import { urls } from "@/lib/constants/urls";
import { showErrorNotification, showSuccessNotification } from "@/lib/helpers/notification";
import axios, { AxiosError } from "axios";
const axiosInstance = axios.create({
  baseURL: urls.api,
});

const usersdb = [{
  email: 'lizakobzeva@list.ru',
  password: '123456',
  name: 'Кобзева Елизавета'
}]
export const loginFetch = async (email: string, password: string) => {
  const list = usersdb.map(user => `${user.email}${user.password}`)
  if (localStorage.getItem('registration_token') || list.includes(`${email}${password}`)) {
    localStorage.setItem("access_token", `${email}${password}`);
    if (!localStorage.getItem('user_name') && usersdb.find(user => user.email == email)?.name) {
      localStorage.setItem("user_name", usersdb.find(user => user.email == email)?.name || 'Пользователь');
    }
    showSuccessNotification("Вы успешно авторизованны")
  } else {
    showErrorNotification("Не правильный логин или пароль")
  }
};
export const registerFetch = async (
  fio: string,
  email: string,
  password: string
) => {
  localStorage.setItem("registration_token", `${email}${password}`);
  localStorage.setItem("user_name", fio);
  showSuccessNotification('Вы успешно зарегистрировались')
};
export const logout = async () => {
  try {
    localStorage.removeItem("access_token")
    return true;
  } catch (e) {
    console.log(e);
  }
};


export const getExelFileKeyWords = async (file: HTMLFormElement) => {
  try {
    const formData = new FormData(file);
    const res = await axiosInstance.post(
      "/get_fields",
      {
        formData
      }
    );
    return res.data

  }
  catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    return false;
  }
}