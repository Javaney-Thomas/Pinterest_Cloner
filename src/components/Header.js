import React from 'react';
import { BsPinterest } from 'react-icons/bs';
import styled from 'styled-components';





function Header() {
  return (
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <BsPinterest/>
          </IconButton>
        </LogoWrapper>
        
        <HomePageButton>
        <a href= "/" >Home</a>
        </HomePageButton>
        <FollowingButton>
          <a href= "/" >Following</a>
        </FollowingButton>
        <SearchWrapper>

        </SearchWrapper>
        <IconsWrapper>

        </IconsWrapper>
      </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display:flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: blue;
`

const LogoWrapper = styled.div`
  .BsPinterest-root {
  color: #e60023;
  font-size: 32px; }
`

const IconButton = styled.div`
  display: flex;
`


const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

`

const FollowingButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: white;


`

const SearchWrapper = styled.div

const IconsWrapper = styled.div


//Going back over props and react 