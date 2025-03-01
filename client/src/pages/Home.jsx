import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  // feching data
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(import.meta.env.VITE_TODOS_FETCH, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        setTodos(response.data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch todos.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // creating todos
  const todoCreate = async () => {
    if (!newTodo) return;
    try {
      const response = await axios.post(
        import.meta.env.VITE_TODOS_CREATE,
        {
          text: newTodo,
          completed: false,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.newTodo);
      setTodos([...todos, response.data.newTodo]);
      setNewTodo("");
    } catch (error) {
      setError("Failed to create todos.");
    }
  };

  // Finding todo status
  const todoStatus = async () => {
    try {
    } catch (error) {
      setError("Failed to find todo status");
    }
  };

  // Deleting todo

  const todoDelete = async () => {
    try {
    } catch (error) {
      setError("Failed to Delete Todo");
    }
  };

  // Nevigate

  return (
    <div className="flex flex-col justify-center items-center px-7 gap-7 py-16 md:py-[90px]">
      <h2 className="text-3xl font-semibold">Add Todo</h2>
      <Input
        className="w-[300px] md:w-[600px]"
        type="text"
        placeholder="Add todo"
        required
      />

      <Button>Add</Button>
    </div>
  );
}

export default Home;
