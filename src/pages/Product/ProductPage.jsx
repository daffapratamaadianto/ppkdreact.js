import { useState } from "react";
import { Card, Form, Button, Table, Modal } from "react-bootstrap";
import AppModal from "../../components/AppModal";

const dataUser = [
    {
        id: 1,
        name: "coffee1",
        price: 1000,
        quantity: 10,
        status: "active"


    },
    {
        id: 2,
        name: "coffee2",
        price: 3000,
        quantity: 10,
        status: "active"


    },
    {
        id: 3,
        name: "coffee3",
        price: 2000,
        quantity: 10,
        status: "active"


    },


]
const ProductPage = () => {
    const _initForm = {
        id: Date.now(),
        name: "",
        status: "Active",
        quantity: 0,
        price: 0

    }


    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState(dataUser)
    const [formData, setFormData] = useState(_initForm)
    const [isEdit, setEdit] = useState(false)
    // const [isDelete, setDelete] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
        setFormData(_initForm)
        setEdit(false)
    }
    const handleEditModal = (user) => {
        setShowModal(true)
        setEdit(true)
        setFormData(user)
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

        //jika edit data
        if (isEdit) {
            setUsers(users.map((us) => (us.id === formData.id ? formData : us)))
        } else {
            const newUser = {
                ...formData,
                id: Date.now(),
            }
            setUsers([...users, newUser])
            setFormData(_initForm)
        }
        setShowModal(false)
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm("are you sure want to delete data")
        if (confirmation) {
            setUsers(users.filter((u) => u.id !== id))
        }
        // filter users
        // setUsers(users.filter((u) => u.id !== id))
    }
    return (

        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    </div>
                    <h4 className="mb-0 fw-bold">Daftar product</h4>
                    <div align="right">
                        <Button variant="primary" onClick={handleOpenModal}>
                            Create product
                        </Button>
                    </div>
                    <Table responsive hover className="align-middle mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.price}</td>
                                    <td>{user.quantity}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <Button onClick={() => handleEditModal(user)} variant="warning" size="sm" className="me-2">Edit</Button>
                                        <Button onClick={() => handleDelete(user.id)} variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>



            <AppModal show={showModal}
                onClose={handleCloseModal} tittle={isEdit ? "Edit product" : "Create New product"}
                onSubmit={handleSubmit}
                submitLabel={isEdit ? 'save Change' : 'save'}
            >


                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="Enter your name" required value={formData.price} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>quantity</Form.Label>
                    <Form.Control type="text" name="quantity" placeholder="Enter your name" required value={formData.quantity} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select name="status" aria-label="Status" onChange={handleChange} defaultValue={formData.status} required>
                        <option value="active">Active</option>
                        <option value="nonactive">Non active</option>
                    </Form.Select>
                </Form.Group>


            </AppModal>
        </>
    )
}



export default ProductPage