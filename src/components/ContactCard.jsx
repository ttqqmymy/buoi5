import React from "react";

function ContactCard({ contact }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{contact.name}</h2>
          <p className="text-gray-600">{contact.email}</p>
          <p className="text-gray-600">{contact.phone}</p>
        </div>
      </div>
      <button className="mt-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
        Edit
      </button>
    </div>
  );
}

export default ContactCard;
