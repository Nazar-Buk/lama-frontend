import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTIzN2RmNWJmNDNkYzJhYzMyODgyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMDEyMjQ2MCwiZXhwIjoxNzMwMzgxNjYwfQ.wWgq_sghB9q233PuUp5HijTnJYAFxEWgZwQXw4Q0vhM";
//axios.create({})  --> ми можемо відправляти інформацію такого типу як headers (де можна вказати токен),
//та зробити базовий url, або url що повторюється. І використовувати його в нашому коді, щоб не писати купу разазів однеи і теж

//headers --> Заголовки HTTP — це додаткова інформація, яка передається разом із запитом до сервера.
//Вони містять різні параметри, які допомагають серверу правильно обробити запит та надати відповідну відповідь.
// Види заголовків Авторизація, Тип контенту: Заголовок Content-Type , Кодування: Заголовок Accept-Encoding ...

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
