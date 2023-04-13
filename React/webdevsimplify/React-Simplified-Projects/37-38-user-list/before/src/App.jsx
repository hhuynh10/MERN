import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err?.name === "AbortError") return
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort()
    };
  }, []);


  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username} and {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
