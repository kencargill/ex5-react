import { useState } from "react";
import { Pet } from './pets'

export default function ArraysEx() {
    const [colors, setColors] = useState([
      "red",
      "orange",
      "yellow"
    ]);

    const [pets, setPets] = useState<Pet[]>([
      {name: 'ted', type: 'dog', id: 2},
      {name: 'pi', type: 'cat', id: 1},
      {name: 'sylvie', type: 'goat', id: 3}
    ])

    function addColor(color: string): void {
      const newColor = `${color}`;
      setColors([...colors, newColor]);
    }

    function deletePet (id:number) {
      const petIndex = pets.findIndex(pet => id === pet.id)
      setPets(pets => [...pets.slice(0, petIndex), ...pets.slice(petIndex + 1)])
    }

    return (
      <div className="App">
        <div>
          <h3>Color List</h3>
            {colors.map((color) => (
              <li key={color}>
                  {color}
              </li>
            ))}
            <div className="colorBtn">
            <button onClick={() => addColor('green')}>Add Green</button>
            <button onClick={() => addColor('blue')}>Add Blue</button>
            <button onClick={() => addColor('violet')}>Add Violet</button>
            </div>
        </div>
        <div>
              <h3>Pet Table</h3>
              <table>
                <tr>
                  <th>pet name</th>
                  <th>pet type</th>
                  <th>delete pet</th>
                </tr>
                  {pets.map((pet) => (
                    <tr key={pet.id}>
                      <td>{pet.name}</td>
                      <td>{pet.type}</td>
                      <td><button onClick={() => deletePet(pet.id)}>delete</button></td>
                    </tr>
                   ))}
              </table>
        </div>
    </div>
    );
} 