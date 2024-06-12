import { promises as fs } from 'fs';

const useGetData = async (pagina: string) => {
    const file = await fs.readFile(process.cwd() + '/src/app/data/home.json', 'utf8');
    const data = JSON.parse(file);
    return data
}
export default useGetData;