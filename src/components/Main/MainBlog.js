import React from 'react'
import link from "../../img/url.svg"
import building from "../../img/building.svg"
import twitterImage from "../../img/twitter.svg"
import locationImage from "../../img/building.svg"
import styled from 'styled-components'


const Main = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px 40px;
  margin-top: 20px;
  align-items: flex-end;
  background-color: white;
  border-radius: 16px;
  &.dark2{
    background-color: rgba(30,42,71);
  }
  
`
const MainTopItem = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
const TopDefs = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
`
const AvatarImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  @media (max-width: 767px) {
            margin-right: 30px;
        }
`
const TopBio = styled.div`
  width: 60%;
  height: max-content;
  display: flex;
  align-items: flex-start;
`
const TopDefsItem = styled.div`
  width: 80%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
            flex-direction: column;
        }
`
const InnerItem = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.h2`
  font-weight: 600;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const NickName = styled.h4`
  color: blue;
  font-size: 12px;
  margin: 10px 0 0;
  &.darkMode{
    color: white;
  }
`
const Joining = styled.h4`
  max-width: 250px;
  width: 100%;
  margin: 0;
  word-break: break-all;
  &.darkMode{
    color: white;
  }
  @media (max-width: 1024px) {
            margin-top: 5px;
        }
`

const Bio = styled.h4`
  width: 100%;
  color: #4B6A9B;
  opacity: 75%;
  font-size: 15px;
  margin-top: 0;
  &.darkMode{
    color: white;
  }
`
const MainLowItem = styled.div`
  width: 80%;
  height: max-content;
  @media (max-width: 1024px) {
            width: 100%;
        }
`
const Stats = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  background-color: rgba(130, 157, 185, 1);
  justify-content: space-evenly;
  padding: 10px 0;
  border-radius: 10px;
  &.dark{
    background-color: rgba(20, 29, 47);
  }
`
const ReposStat = styled.div`
  width: max-content;
`
const Repos = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const ReposNum = styled.h4`
  width: fit-content;
  color: black;
  size: 22px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const FollowerStat = styled.div`
  width: max-content;
`
const Follower = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const FollowerNum = styled.h4`
  width: fit-content;
  color: black;
  size: 22px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const FollowingStat = styled.div`
  width: max-content;
`
const Following = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const FollowingNum = styled.h4`
  width: fit-content;
  color: black;
  size: 22px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const Definitions = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  @media (max-width: 767px) {
            flex-direction: column;
        }
`

const DefLeftItem = styled.div`
  width: 45%;
  @media (max-width: 767px) {
            width: 100%;
        }
`
const Place = styled.div`
  display: flex;
`
const LocationImg = styled.img`
  
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`
const Location = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const Link = styled.div`
  display: flex;
  margin-top: 10px;
`

const LinkImg = styled.img`
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`
const GithubLink = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`

const DefRightItem = styled.div`
  width: 45%;
  @media (max-width: 767px) {
            width: 100%;
        }
`
const Twitter = styled.div`
  display: flex;
  @media (max-width: 767px) {
            margin-top: 10px;
        }
`

const TwitterImg = styled.img`
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`
const TwitterLink = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`
const Job = styled.div`
  display: flex;
  margin-top: 10px;
`

const BuildingImg = styled.img`
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`
const JobLink = styled.h4`
  width: fit-content;
  color: #4B6A9B;
  size: 13px;
  margin: 0;
  &.darkMode{
    color: white;
  }
`


const MainBlog = ({mode,avatar,userName,nick,join,bio,repos,followers,following,location,githubLink,jobLink,twitterLink}) => {
  
  
  return (
    <Main className={`${mode ? "" : "dark2"}`}>
        <MainTopItem>
          <TopDefs>
            <AvatarImg src={avatar}></AvatarImg>
            <TopDefsItem>
              <InnerItem>
                <UserName className={`${mode ? "" : "darkMode"}`}>{userName}</UserName>
                <NickName className={`${mode ? "" : "darkMode"}`}>{nick}</NickName>
              </InnerItem>
              <Joining className={`${mode ? "" : "darkMode"}`}>Joined {join}</Joining>
            </TopDefsItem>
          </TopDefs>
          <TopBio>
            <Bio>{bio}</Bio>
          </TopBio>
        </MainTopItem>
        <MainLowItem>
          <Stats className={`${mode ? "" : "dark"}`}>
            <ReposStat>
              <Repos className={`${mode ? "" : "darkMode"}`}>Repos</Repos>
              <ReposNum className={`${mode ? "" : "darkMode"}`}>{repos}</ReposNum>
            </ReposStat>
            <FollowerStat>
              <Follower className={`${mode ? "" : "darkMode"}`}>Followers</Follower>
              <FollowerNum className={`${mode ? "" : "darkMode"}`}>{followers}</FollowerNum>
            </FollowerStat>
            <FollowingStat>
              <Following className={`${mode ? "" : "darkMode"}`}>Following</Following>
              <FollowingNum className={`${mode ? "" : "darkMode"}`}>{following}</FollowingNum>
            </FollowingStat>
          </Stats>
          <Definitions>
            <DefLeftItem>
              <Place>
                <LocationImg src={locationImage}/>
                <Location className={`${mode ? "" : "darkMode"}`}>{location}</Location>
              </Place>
              <Link>
                <LinkImg src={link}/>
                <GithubLink className={`${mode ? "" : "darkMode"}`}>{githubLink}</GithubLink>
              </Link>
            </DefLeftItem>
            <DefRightItem>
              <Twitter>
                <TwitterImg src={twitterImage}/>
                <TwitterLink className={`${mode ? "" : "darkMode"}`}>{twitterLink}</TwitterLink>
              </Twitter>
              <Job>
                <BuildingImg src={building}/>
                <JobLink className={`${mode ? "" : "darkMode"}`}>{jobLink}</JobLink>
              </Job>
            </DefRightItem>
          </Definitions>
        </MainLowItem>
    </Main>
  )
}

export default MainBlog
