import {
  Link,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeBlog } from '../redux/blogRedux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function RedirectBlog({ blog }) {
  let id = blog.id;
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeBlog(id));
  }
  return (<Container fluid>
    <Row className="flex" width="100%">
    <Col md="4" className="pr-1" style={{"width":"60%"}} >
      <div className="flex-1 px-2 text-uppercase" style={{ "textTransform": 'uppercase'}}>
        <Link to={`/blog/${blog.id}`} >{blog.title}</Link>
      </div>
    </Col>
    <Col md="2" className="pr-1">
      <div className="flex-none px-2">
        <span><Link to={`/blog/${blog.id}`} >Xem</Link></span>
      </div>
    </Col>
    <Col md="2" className="pr-1">
      <div className="flex-none px-2">
        <span><Link to={`update/blog/${blog.id}`} >Sửa</Link></span>
      </div>
    </Col>
    <Col md="2" className="pr-1">
      <div className="flex-none px-2">
        <span><button onClick={onClickRemove} >Xóa</button></span>
      </div>
    </Col>
    </Row>
    </Container>)
}

export default RedirectBlog;