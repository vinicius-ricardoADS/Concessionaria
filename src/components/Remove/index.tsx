import Alert from 'react-bootstrap/Alert';

export default async function Remove (id: number) {
    const response = await fetch(`http://localhost:3000/cars/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        return (
            <Alert variant='primary'>
                Remove success
            </Alert>
        )
    } else {
        return (
            <Alert variant='danger' dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            </Alert>
        )
    }
}