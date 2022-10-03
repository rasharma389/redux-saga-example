import api from "../utils/api";

export const fetchStudents = async (): Promise<any> => {
    return await api.get(['students.json']).then(res => res.json())
}