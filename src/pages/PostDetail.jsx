import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoad(false);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      {load ? (
        <Spinner animation={"border"} />
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>
              ID: {post.id} | {post.title}{" "}
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PostDetail;
