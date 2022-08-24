import { Box } from "components/Box"

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return(
        <Box as="div" display="flex">
            {options.map(option => (
                <button  
                type="button"
                key={option} 
                value={option}
                onClick={onLeaveFeedback}             
                >{option}
                </button>
            )
            )}
        </Box>


    )

}