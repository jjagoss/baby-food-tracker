export const getImageUrl = (foodName: string): string => {
    return `/images/foods/${foodName.toLowerCase().replace(/\s+/g, '-')}.webp`;
}