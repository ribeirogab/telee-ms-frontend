export default function reduceGuidelines (chipData) {
  return chipData.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.label)
    return accumulator
  }, [])
}
