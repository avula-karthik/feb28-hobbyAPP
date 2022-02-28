import { useReducer, useState } from "react";
export default function HobbiesUseReducer() {
    const [input, setInput] = useState(null);
    const HobbiesReducer = (state, action) => {
        if (action.type == "add") {
            return { hobbies: [...state.hobbies, input] };
        }
        if (action.type == "delete") {
            let newHobbies = [];
            [...state.hobbies].filter((val, index) => {
                if (action.toRemove !== val) {
                    newHobbies.push(val);
                }
            });
            return { hobbies: newHobbies };
        }
        if (action.type == "clear") {
            return { hobbies: [] };
        }
    };
    const initialState = { hobbies: ["initial hobby 1", "Initial Hobby 2"] };
    const [state, dispatch] = useReducer(HobbiesReducer, initialState);
    return (
        <div className="totalContainer">
            <input
                required
                type="text"
                name="hobby"
                onInput={(event) => {
                    setInput(event.target.value);
                }}
                value={input}
            />
            <br />
            <button className="btn btn-success m-3"
                onClick={() => {
                    dispatch({ type: "add" });
                }}
            >
                Add Hobby
            </button>
            <button className="btn btn-success m-3"
                onClick={() => {
                    dispatch({ type: "clear" });
                }}
            >
                Clear All Hobbies
            </button>
            <div>
                {state.hobbies.map((hobby, index) => {
                    return (
                        <div>
                            <h2 className="hobbiesText">{index + 1} {hobby} </h2>
                            <button className="btn btn-danger m-2 paddNo"
                                onClick={() => {
                                    dispatch({
                                        type: 'delete',
                                        toRemove: hobby
                                    })
                                }}>Click to delete</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
