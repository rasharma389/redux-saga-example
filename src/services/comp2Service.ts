import api from "../utils/api";

export const fetchTeachers = async (): Promise<any> => {
    return await api.get(['teachers.json']).then(res => res.json())
}