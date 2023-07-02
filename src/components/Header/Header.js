import React from 'react'
import styled from 'styled-components'
import searchIcon from "../../img/search.png"
import sun from "../../img/002-sun (1).svg"
import moon from "../../img/moon.svg"
import "./Header.css"



const HeaderBlog = styled.div`
  width: 100%;
`
const TopBlog = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Name = styled.h2`
  color: black;
  font-weight: 700;
  margin-bottom: 30px;
  &.white{
    color: white;
  }
`
const ModeContent = styled.div`
  max-width: 100px;
  width: 100%;
  height: max-content;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Mode = styled.h3`
  margin: 0 10px 0 0;
  font-weight: 300px;
  font-size: 16px;
  text-transform: uppercase;
`
const ModeIcon = styled.img`
  width: 20px;
  height: 20px;
`

const FilterBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
  padding: 15px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: white;
  border-radius: 16px;
  align-items: center;
  &.dark2{
    background-color: rgba(30,42,71);
  }
  @media (max-width: 767px) {
            flex-direction: column;
            align-items: center;
        }
`

const FilterBoxItem = styled.div`
  display: flex;
  width: 60%;
  min-height: 40px;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 767px) {
            width: 100%;
        }
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 10px;
`
const SearchInput = styled.input`
  width: 70%;
  height: 90%;
  border: none;
  outline: none;
  border-radius: 6px;
  padding-left: 10px;
  background-color: transparent;
  
`
const NoResult = styled.h3`
  width: max-content;
  height: fit-content;
  color: rgba(179, 20, 34, 1);
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  display: none;
  &.show{
    display: block;
    animation: shake 0.4s ease-in-out;
  }
`

const Btn = styled.button`
  width: 15%;
  min-height: 40px;
  border: none;
  border-radius: 6px;
  background-color: rgba(14, 61, 127, 1);
  color: white;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 767px) {
            width: 30%;
            margin-top: 10px;
        }
`
const Header = ({noresult,value,getData,inputValueHandler,mode,modeImg,setMode,setModeImg}) => {
    const changeMode = () => {
      setMode(!mode)
      setModeImg(!modeImg)
    }
  return (
    <HeaderBlog>
        <TopBlog>
          <Name className={`${mode ? "" : "white"}`}>devfinder</Name>
          <ModeContent onClick={changeMode} className={`${mode ? "" : "white"}`}>
            <Mode>{mode ? "dark" : "light"}</Mode>
            <ModeIcon src={modeImg ? moon : sun}/>
          </ModeContent>
        </TopBlog>
        <FilterBox className={`${mode ? "" : "dark2"}`}>
          <FilterBoxItem>
            <SearchIcon src={searchIcon}/>
            <SearchInput type="text" placeholder='Search Github username...' value={value} onChange={inputValueHandler}/>
          </FilterBoxItem>
          <NoResult className={`${noresult ? "show" : ""}`}>No Result</NoResult>
          <Btn onClick={getData}>Search</Btn>
        </FilterBox>
    </HeaderBlog>
  )
}

export default Header
