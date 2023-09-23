import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MemoryList() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    async function fetchMemories() {
      try {
        const response = await axios.get('/api/get-all-memory'); // Updated endpoint
        setMemories(response.data.data); // Assuming data is an array of memories in your response
      } catch (error) {
        console.error('Error fetching memories:', error);
        // Handle error
      }
    }

    fetchMemories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post('/api/delete-memory', { _id: id }); // Updated endpoint and changed method to POST
      // Remove the deleted memory from the state
      setMemories((prevMemories) => prevMemories.filter(memory => memory._id !== id));
    } catch (error) {
      console.error('Error deleting memory:', error);
      // Handle error, e.g., show a notification to the user
    }
  };

  return (
    <div>
      <h2>My Travel Memories</h2>
      <ul>
        {memories.map((memory) => (
          <li key={memory._id}>
            <h3>{memory.title}</h3>
            <p>{memory.location}</p>
            <p>{memory.description}</p>
            <img src={memory.images[0]} alt={memory.title} /> {/* Assuming images is an array */}
            <button onClick={() => handleDelete(memory._id)}>Delete</button>
            {/* Display other memory details and images */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoryList;
