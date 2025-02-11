import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Row,
  ListGroup,
  Container,
  Spinner,
} from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const limitPost = searchParams.get("limit")
    ? parseInt(searchParams.get("limit"))
    : 10;
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(limitPost);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [limit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (limitPost) {
      setSearchParams({ limit: String(limit) });
    }
  };

  return (
    <>
      <h1>Blog page</h1>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs={5}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={limit}
                  onChange={(e) => setLimit(parseInt(e.target.value) || 0)}
                  type="number"
                  placeholder="Enter..."
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={6}>
            {loading ? (
              <Spinner animation="border" />
            ) : (
              <ListGroup>
                {posts.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Link to={`/blog/${item.id}`}>{item.title}</Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
