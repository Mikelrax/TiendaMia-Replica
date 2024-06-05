export function getRandomIds(array: any[], num: number) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).map(item => item.id);
}
