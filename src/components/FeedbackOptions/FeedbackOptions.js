import { Box } from "components/Box"
import { Button } from "./FeedbackOptions.styled"
import propTypes from 'prop-types'


export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return(
        <Box as="div" display="flex">
            {options.map(option => (
                <Button  
                type="button"
                key={option} 
                value={option}
                onClick={onLeaveFeedback}             
                >{option}
                </Button>
            )
            )}
        </Box>
    )
}

FeedbackOptions.prototype = {
    options: propTypes.arrayOf(propTypes.string.isRequired),
    onLeaveFeedback: propTypes.func.isRequired,
}