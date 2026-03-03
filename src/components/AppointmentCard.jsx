function AppointmentCard({ appointment, deleteAppointment, markComplete }) {
  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{appointment.name}</h2>
        <p className="text-gray-500">{appointment.date}</p>
        <p
          className={
            appointment.completed ? "text-green-600" : "text-yellow-600"
          }
        >
          {appointment.completed ? "Completed" : "Pending"}
        </p>
      </div>

      <div className="flex gap-2">
        {/* Show Complete button only if not completed */}
        {!appointment.completed && (
          <button
            onClick={() => markComplete(appointment.id)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Complete
          </button>
        )}

        <button
          onClick={() => deleteAppointment(appointment.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
