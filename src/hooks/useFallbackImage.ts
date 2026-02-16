const defaltUrl = "";

export const useFallbackImage = (imageUrl?: string | undefined) => {
    if(!imageUrl){
        return defaltUrl;
    }

    return imageUrl;
}