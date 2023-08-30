class RandomDataGenerator
{
    get randomDataGenerator()
    {
        return Math.random().toString(36).substring(2);
    }
}
export default new RandomDataGenerator();