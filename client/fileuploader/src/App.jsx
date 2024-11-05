import React, { useState } from 'react';
import './App.css';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);
    const [dataTypes, setDataTypes] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setDataTypes(response.data.data_types);
            setError(null);
        } catch (err) {
            setError(err.response?.data.error || "An error occurred");
            setDataTypes(null);
        }
    };

    return (
        <div className='font-nunito'>
            <Container>
                <section>
                    <div className='parent-container'>
                        <h1 className='text-xl font-semibold p-4'>Data Type Inference</h1>
                        <Form onSubmit={handleSubmit} className='img-upload d-flex align-items-center'>
                            <Form.Group className='me-2'>
                                <Form.Control
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".csv, .xlsx"
                                    className='input-content'
                                />
                            </Form.Group>
                            <Button type="submit" className='p-1 text-xm font-semibold button-text'>
                                Upload and Process
                            </Button>
                        </Form>
                        <div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {dataTypes && (
                                <div>
                                    <h2>Inferred Data Types</h2>
                                    <ul>
                                        {Object.entries(dataTypes).map(([column, dtype]) => (
                                            <li key={column}>
                                                <strong>{column}</strong>: {dtype}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default App;
