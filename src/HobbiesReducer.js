function HobbiesUseReducer() {
    const [input, setInput] = useState("");
    const HobbiesReducer = (state, action) => {
        if (action.type === "add") {
            return { hobbies: [...state.hobbies, input] };
        }
        if (action.type === "remove") {
            let updatedHobbies = [];
            [...state.hobbies].filter((val, index) => {
                if (action.toRemove !== val) {
                    updatedHobbies.push(val);
                }
            });
            return { hobbies: updatedHobbies };
        }
        if (action.type === "reset") {
            return { hobbies: [] };
        }
    };
export default HobbiesReducer