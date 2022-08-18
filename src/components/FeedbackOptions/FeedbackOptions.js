import { Box } from "components/Box"

export const FeedbackOptions = ({options}) => {
    return(
        <Box as="div" display="flex">
            {options.map(option => (
                <button  
                type="button"
                key={option} 
                // onClick={onLeaveFeedback(option)}            onLeaveFeedback  
                    >{option}</button>
            )
            )}
        </Box>


    )

}