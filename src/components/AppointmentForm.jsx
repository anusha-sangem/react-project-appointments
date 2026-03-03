import { useState } from "react";

function AppointmentForm({ addAppointment }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date) return;

    addAppointment({
      id: Date.now(),
      name,
      date,
      status: "Pending",
    });

    setName("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-6"
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>
    </form>
  );
}

export default AppointmentForm;
