import { useSelector } from "react-redux"

export const useSelectorCustom = () => {
    const result = useSelector(state => state.options.result)
    const loadingResult = useSelector(state => state.options.loadingResult)

    return{
        result, loadingResult,
    }
}