import { useState, useEffect } from "react";
import { RGGrid } from "@rg-grid/rg-grid";
import AppointmentForm from "./components/AppointmentForm";
import "@rg-grid/rg-grid/styles.css";

function App() {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");

    if (saved) return JSON.parse(saved);

    // 👇 Sample default data
    return [
      {
        id: 1,
        name: "John Doe",
        date: "2026-02-15",
        status: "Pending",
      },
      {
        id: 2,
        name: "Anita Sharma",
        date: "2026-02-18",
        status: "Pending",
      },
      {
        id: 3,
        name: "Michael Brown",
        date: "2026-02-20",
        status: "Pending",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, []);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const markComplete = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, status: "Completed" } : item,
      ),
    );
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const workflow = {
    column: "status",
    states: ["Pending", "Completed"],
    transitions: {
      Pending: ["Completed"],
    },
  };

  const columns = [
    {
      key: "name",
      label: "Patient Name",
    },
    {
      key: "date",
      label: "Date",
    },
    {
      key: "status",
      label: "Action",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Appointment Manager
      </h1>

      <AppointmentForm addAppointment={addAppointment} />

      <div className="mt-6 max-w-5xl mx-auto bg-white p-4 rounded shadow">
        <RGGrid
          rowReorderable={false}
          columns={columns}
          data={appointments}
          workflow={workflow}
          theme="light"
          onStateChange={(row, newState) =>
            console.log("State changed:", row, newState)
          }
        />
      </div>
    </div>
  );
}

export default App;
