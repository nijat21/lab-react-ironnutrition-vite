import { Row } from 'antd';

import { useState } from "react";
import foodsData from '../foods.json';
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from './Search';


function FoodList() {
    const [foods, setFoods] = useState(foodsData);
    const [foodsShown, setFoodsShown] = useState(foodsData);

    // Function to delete food
    const deleteFood = (id) => {
        const filteredFoods = foodsShown.filter(food => food.id !== id);
        setFoodsShown(filteredFoods);
    }

    // Function to add food
    const addFood = (value) => {
        const newFoodArray = [value, ...foods];
        setFoods(newFoodArray);
    }

    // Search specific food
    const searchFood = (query) => {
        const foundFood = foods.filter(food => food.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setFoodsShown(foundFood);
    }

    return (
        <div>
            <Search searchFood={searchFood} />
            <AddFoodForm addFood={addFood} />
            <Row gutter={[5, 40]}>
                {foodsShown.map((food) => {
                    return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
                })}
            </Row>

            {foodsShown.length === 0 &&
                <>
                    <h2> Oops! There is no more content to show.</h2>
                    <img src="../assets/empty.png" alt="" />
                </>
            }
        </div>
    );
}

export default FoodList