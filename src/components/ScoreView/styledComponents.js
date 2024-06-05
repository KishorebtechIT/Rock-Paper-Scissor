import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  font-weight: 700;
  margin-top: 0px;
  font-family: 'Roboto';
  }
`
