import React from 'react';
import './App.css';
import { useState } from 'react';
import styled from "styled-components"
import avatarka from "../src/img/Bitmap.svg"
import Header from '../src/components/Header/Header';
import MainBlog  from '../src/components/Main/MainBlog';
import "./App.css"
import "./components/useSubmitEnter"
import { useSubmitEnter } from './components/useSubmitEnter';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 50px;
  background-color: rgba(184, 199, 203, 1);
  &.dark{
    background-color: rgba(20, 29, 47);
  }
`;

const Content = styled.div`
  max-width: 750px;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;



function App() {

  const [value, setValue] = useState("")
  const [avatar, setAvatar] = useState(avatarka)
  const [userName, setUserName] = useState("The Octocat")
  const [nick, setNick] = useState("@octocat")
  const [join, setJoin] = useState("25 Jan 2011")
  const [bio, setBio] = useState("This profile has no bio")
  const [repos, setRepos] = useState(8)
  const [followers, setFollowers] = useState(3938)
  const [following, setFollowing] = useState(9)
  const [location, setLocation] = useState("San Francisco")
  const [githubLink, setGithubLink] = useState("https://github.blog")
  const [twitterLink, setTwitterLink] = useState("Not Available")
  const [jobLink, setJobLink] = useState("@github")
  const [noresult, setNoresult] = useState(false)
  const [mode, setMode] = useState(true)
  const [modeImg, setModeImg] = useState(true)
  
  const inputValueHandler = (e) => {
    setValue(e.target.value)
    setNoresult(false)
  }
  

  const getData = () =>{
    fetch(`https://api.github.com/users/${value}`)
    .then(res => res.json())
    .then(obj => {
      if(obj.message === 'Not Found'){
        setNoresult(true)
      }else{
        setAvatar(obj.avatar_url)
        setUserName(obj.name)
        setNick(obj.blog)
        setJoin(obj.created_at)
        if(obj.bio === null || ""){
          setBio("This profile has no bio")
        }else{
          setBio(obj.bio)
        }
        setRepos(obj.public_repos)
        setFollowers(obj.followers)
        setFollowing(obj.following)
        if(obj.bio === null || ""){
          setLocation("Not Available")
        }else{
          setLocation(obj.location)
        }
        if(obj.bio === null || ""){
          setGithubLink("Not Available")
        }else{
          setGithubLink(obj.url)
        }
        if(obj.bio === null || ""){
          setTwitterLink("Not Available")
        }else{
          setTwitterLink(obj.twitter_username)
        }
        if(obj.bio === null || ""){
          setJobLink("Not Available")
        }else{
          setJobLink(obj.company)
        }
      }
    })
  }
  useSubmitEnter(getData, "Enter")
  
  return(
    <Wrapper className={`${mode ? "" : "dark"}`}>
      <Content>
        <Header noresult={noresult} value={value} getData={getData} inputValueHandler={inputValueHandler} mode={mode} modeImg={modeImg} setMode={setMode} setModeImg={setModeImg}/>
        <MainBlog mode={mode} avatar={avatar} location={location} githubLink={githubLink} jobLink={jobLink} twitterLink={twitterLink} bio={bio} nick={nick} userName={userName} followers={followers} following={following} repos={repos} join={join}/>
      </Content>
    </Wrapper>
  )
}
export default App;