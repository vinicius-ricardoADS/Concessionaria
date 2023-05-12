export default async function Remove (id: number, onRemoveSuccess: () => void) {
    const response = await fetch(`http://localhost:3000/cars/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) onRemoveSuccess();
}