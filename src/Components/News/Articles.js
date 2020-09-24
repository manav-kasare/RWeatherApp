import React from "react";
import styled from "styled-components";
import Photo from "./Image";
import Heading from "./Heading.js";
// api key: cf0c655acdf64e688471209acb36b3eb

const Articles = ({
  title,
  description,
  author,
  url,
  urlToImage,
  content,
  publishedAt,
  totalResults,
}) => {
  console.log(totalResults);
  const Container = styled.div`
    margin: 100px auto;
    width: 1000px;
    height: 750px;
    overflow: scroll;
    background-color: rgba(255, 255, 255, 0.05);
  `;
  const Article = styled.div`
    margin: 20px auto;
    padding: 10px 10px;
    margin-bottom: 30px;
    width: 900px;
    height: 250px;
    overflow: scroll;
    background-color: rgba(255, 255, 255, 0.075);
    border-radius: 5px;
    display: flex,
    flex-direction: column,
  `;

  const TitleDiv = styled.div`
    padding-left: 20px;
    padding-top: 20px;
    font-family: "Fira Sans", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
  `;
  const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const PostContent = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const DescriptionDiv = styled.div`
    padding: 5px 20px;
    font-family: "MerriWeather", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: grey;
  `;
  const AuthorDiv = styled.div`
    font-family: "MerriWeather", sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
    color: grey;
  `;
  const PublisedAtDiv = styled.div`
    font-family: "MerriWeather", sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
    padding-left: 20px;
    color: grey;
    float: right;
  `;
  const SubHeader = styled.div`
    padding: 5px 18px;
    display: flex;
    flex-direction: row;
  `;

  const BodyDiv = styled.div`
    font-family: "MerriWeather", sans-serif;
    font-size: 1.2rem;
    padding: 20px 20px;
  `;
  const ReadMore = styled.a`
    text-decoration-line: none;
    font-family: "MerriWeather", sans-serif;
    color: lightblue;
    font-size: 1.2rem;
  `;
  let all_articles = [];
  for (var i = 0; i < 10; i++) {
    all_articles.push(
      <Article>
        <HeaderDiv>
          <Photo urlToImage={urlToImage[i]} />
          <PostContent>
            <TitleDiv>{title[i]}</TitleDiv>
            <DescriptionDiv>{description[i]}</DescriptionDiv>
            <SubHeader>
              <AuthorDiv></AuthorDiv>
              <PublisedAtDiv>Published At: {publishedAt[i]}</PublisedAtDiv>
            </SubHeader>
          </PostContent>
        </HeaderDiv>
        <BodyDiv>
          {content[i]}
          <ReadMore href={url[i]}> Read More...</ReadMore>
        </BodyDiv>
      </Article>
    );
  }
  return (
    <Container>
      <Heading />
      {all_articles}
    </Container>
  );
};

export default Articles;
