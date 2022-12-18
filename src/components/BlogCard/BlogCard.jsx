import { formatDistanceToNow } from 'date-fns'

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as DatePosted,
} from './BlogCard.styled';

export const BlogCard = ({poster, tag, title, description, userName, avatar, postedAt}) => {
  const date= formatDistanceToNow(
    new Date(postedAt));
  return (
    <Card>
      <CardHeader>
        <CardPoster
          src={poster}
          alt={tag}
        />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>
         {description}
        </CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt="Jane Doe" />
          <UserInfo>
            <UserName>{userName}</UserName>
            <DatePosted>{date} ago</DatePosted>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
