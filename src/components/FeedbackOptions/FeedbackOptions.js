import { Box } from "components/Box"

export const FeedbackOptions = ({options}, idx) => {
    return(
        <Box as="div" display="flex">
            {options.map(option => (
                <button  
                key={idx}              
                    >{option}</button>
            )
            )}
        </Box>


    )

}