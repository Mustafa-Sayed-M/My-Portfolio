import { useQuery } from "@tanstack/react-query";
import { fetchProfileData } from "../Utils/api";

function useFetchProfileData() {
    const { data, isLoading } = useQuery({
        queryKey: ['profile_data'],
        queryFn: fetchProfileData,
        refetchOnWindowFocus: false
    });
    return { data, isLoading }
}

export default useFetchProfileData;