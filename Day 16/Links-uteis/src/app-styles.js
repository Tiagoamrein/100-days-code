import styled from 'styled-components'

export const Container = styled.div`
  background: #345FA8;
  width: 100%;
  height: 100vh;
  

  header{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-top: 50px;
    }

    h1{
      color: white;
      margin-top: 10px;
    }
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }




`