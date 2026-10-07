// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
//     from "/../../components/ui/card";

// import { Button } from "/././components/ui/button";
// // import AppModal from "../../components/AppModal";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";

import { Button } from "../../components/ui/button";

import AppModal from "../../components/AppModal";

const dataUser = [
    {
        id: 1,
        name: "Daffa",
        email: "daffa@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        name: "wowo",
        email: "wowo@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        name: "wiwi",
        email: "wiwi@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "wuwu",
        email: "wuwu@gmail.com",
        password: "1234"
    },
]
const ListUser = () => {
    const _initForm = {

        name: "",
        email: "",
        password: "",
        status: "Active",

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
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)))
        } else {
            const newUser = {
                ...formData,
                id: Date.now(),
            }
            setUsers([...users, newUser])
            setFormData(_initForm)
        }

        // disinii
        // const newUser = {
        //     ...formData,
        //     id: Date.now(),
        // };
        setUsers([...users, formData])
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
            <Card className="shadow-sm border-border p-6">
                <CardContent className="p-0">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    </div>
                    <h4 className="mb-0 fw-bold">Data User</h4>
                    <div align="right">
                        <Button variant="primary" onClick={handleOpenModal}>
                            Create New User
                        </Button>
                    </div>
                    <table className="w-full text-left text-sm">
                        <thead className="border-y bg-muted/30 text-xs uppercase text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 font-medium">#</th>
                                <th className="px-6 py-3 font-medium" >Name</th>
                                <th className="px-6 py-3 font-medium">Email</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {users.map((user, index) => (
                                <tr key={index} className="hover:bg-muted/50 transition-colors ">
                                    <td className="px-4 py-6 whitespace-nowrap">{index + 1}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.email}</td>
                                    <td>{user.status}</td>
                                    <td className="px-4 py-6 text-right whitespace-nowrap">
                                        <Button onClick={() => handleEditModal(user)} variant="warning" size="sm" className="me-2">Edit</Button>
                                        <Button onClick={() => handleDelete(user.id)} variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </CardContent>
            </Card>



            <AppModal show={showModal}
                onClose={handleCloseModal} tittle={isEdit ? "Edit User" : "create New user"}
                onSubmit={handleSubmit}
                submitLabel={isEdit ? 'save Change' : 'save'}
            >


                {/* <Form.Group className="mb-3">
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
                </Form.Group> */}

            </AppModal>
        </>
    )
}

export default ListUser 