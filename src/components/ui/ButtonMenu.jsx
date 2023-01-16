import React from 'react'
import { ButtonBaseIcon } from '../../styles/ui/ButtonModule'
import { colors } from '../../themes/colors'
import { IconClose } from './IconClose'
import { IconMenu } from './IconMenu'

export const ButtonMenu = (props) => {
  return (

    <ButtonBaseIcon onClick={props.onClick}>
        {
            props.open === false 
                ? (
                    <IconMenu color={colors.primary} />
                )
                : (
                    <IconClose />
                )
        }
    </ButtonBaseIcon>
  )
}
