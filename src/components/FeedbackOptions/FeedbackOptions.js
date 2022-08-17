import { Box } from "components/Box"

export const FeedbackOptions = ({options}, idx,) => {
    return(
        <Box as="div" display="flex">
            {options.map(option => (
                <button  
                type="button"
                key={idx} 
                // onClick={onLeaveFeedback(option)}            onLeaveFeedback  
                    >{option}</button>
            )
            )}
        </Box>


    )

}