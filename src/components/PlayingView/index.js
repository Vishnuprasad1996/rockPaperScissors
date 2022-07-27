import {RspButton, ButtonImg} from './StyledComponents'

const PlayingView = props => {
  const {choicesListDetails, onClickRPSButton} = props
  const {id, imageUrl} = choicesListDetails

  const testid = `${id.toLowerCase()}Button`

  const onClickUserButton = () => {
    onClickRPSButton(id)
  }

  return (
    <RspButton type="button" data-testid={testid} onClick={onClickUserButton}>
      <ButtonImg src={imageUrl} alt={id} />
    </RspButton>
  )
}

export default PlayingView
