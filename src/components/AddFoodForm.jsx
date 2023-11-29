// Your code here
import { useState } from "react"
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addFood }) {
    // States for each input
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    // Handler functions 
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        addFood(newFood);

        // Clear the fields
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
            <label htmlFor="name">Name</label>
            <Input type="text" name="name" id="name" value={name} onChange={handleName} />
            <label htmlFor="image">Image</label>
            <Input type="text" name="image" id="image" value={image} onChange={handleImage} />
            <label htmlFor="calories">Calories</label>
            <Input type="number" name="calories" id="calories" value={calories} onChange={handleCalories} />
            <label htmlFor="servings">Servings</label>
            <Input type="number" name="servings" id="servings" value={servings} onChange={handleServings} />
            <Button type="submit">Create</Button>
        </form>
    )
}

export default AddFoodForm
