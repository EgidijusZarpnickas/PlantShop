import { useEffect, useState } from "react";

// imgKey yra is githubo Gist ateinantis duomenis 
export default function useFetch(url, folder, imgKey) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);




            // const { data: testimonials, loading, error } = useFetch(
            //     'https://gist.githubusercontent.com/EgidijusZarpnickas/752f4c7e94b0087400223b1a3a9773d5/raw/6bb9eda6ad55a2b61da0bdfaf89b662714437f06/clients.json',
            //     'clients',
            //     'img'
            // );
        
            // clients yra aplankalas paciame visual code , o img - yra ka meginam istraukti is gisto kaip pavadina nuotrauka 
        







            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to retriev from  API github ! ');
                }
                const jsonData = await response.json();
                const dataWithImage = await Promise.all(
                    jsonData.map(async elem => {
                        let imageSrc = "";
                        try {
                            imageSrc = new URL (`../assets/${folder}/${elem[imgKey]}`, import.meta.url).href;
                            
                        }catch{
                            imageSrc = new URL (`../assets/${folder}/empty.svg`, import.meta.url).href;
                        }
                        return {...elem, imageSrc};
                    })
                )
                setData(dataWithImage);
                console.log(dataWithImage);

            } catch (error) {
                setError(error.messages);
                console.log('Klaida', error);
            }
            finally{
                setLoading(false);
            }

        };

        fetchData();


    }, [url,folder,imgKey])

    return {data,loading,error};

}