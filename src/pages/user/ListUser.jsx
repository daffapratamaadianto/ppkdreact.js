import { useState } from "react";
import { Card, Form, Button, Table, Modal } from "react-bootstrap";

const dataUser = [
    {
        name: "Daffa",
        email: "daffa@gmail.com",
        password: "1234"
    },
    {
        name: "wowo",
        email: "wowo@gmail.com",
        password: "1234"
    },
    {
        name: "wiwi",
        email: "wiwi@gmail.com",
        password: "1234"
    },
    {
        name: "wuwu",
        email: "wuwu@gmail.com",
        password: "1234"
    },
]
const ListUser = () => {
    const _initForm = {
        id: null,
        name: "",
        email: "",
        password: "",
        status: "Active",

    }


    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState(dataUser)
    const [formData, setFormData] = useState(_initForm)

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });


    }
    const handleSubmit = (e) => {
        e.preventDefault()


        const newUser = {
            ...formData,
            id: Date.now(),
        };
        setUsers([...users, formData])
        setShowModal(false)
    }

    return (

        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    </div>
                    <h4 className="mb-0 fw-bold">Data User</h4>
                    <div align="right">
                        <Button variant="primary" onClick={handleOpenModal}>
                            Create New User
                        </Button>
                    </div>
                    <Table responsive hover className="align-middle mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.email}</td>
                                    <td>Active</td>
                                    <td>
                                        <Button variant="warning" size="sm" className="me-2">Edit</Button>
                                        <Button variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Creat new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name"
                            placeholder="enter your name"
                            required
                            value={formData.name} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control value={formData.email} onChange={handleChange} type="email" name="email"
                            placeholder="enter your email" required></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>password</Form.Label>
                        <Form.Control value={formData.password} onChange={handleChange} type="password" name="password"
                            placeholder="enter your password" required></Form.Control>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListUser 