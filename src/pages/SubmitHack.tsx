import React, { useState } from 'react';

interface HackSubmission {
  title: string;
  hackName: string;
  year: string;
  category: string;
  region: string;
  description: string;
  team: string;
  outcome: string;
}

const SubmitHack: React.FC = () => {
  const [formData, setFormData] = useState<HackSubmission>({
    title: '',
    hackName: '',
    year: '',
    category: '',
    region: '',
    description: '',
    team: '',
    outcome: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted hack:', formData);
    setShowConfirmation(true);
    setFormData({
      title: '',
      hackName: '',
      year: '',
      category: '',
      region: '',
      description: '',
      team: '',
      outcome: '',
    });
  };

  if (showConfirmation) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <div className="card">
          <h2 className="text-2xl font-bold hacker-text mb-4">Hack Submitted!</h2>
          <p className="text-gray-300 mb-6">
            Your historical hack has been received. Our team will review it and add it to the collection.
          </p>
          <button
            onClick={() => setShowConfirmation(false)}
            className="px-6 py-3 bg-hacker-green text-dark-bg font-bold rounded hover:bg-opacity-80"
          >
            Submit Another Hack
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold hacker-text mb-8">Submit a Historical Hack</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-hacker-blue mb-2">Historical Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="e.g., The Berlin Wall Falls"
          />
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Hack Name</label>
          <input
            type="text"
            name="hackName"
            value={formData.hackName}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="e.g., Tearing Down the Firewall of Communism"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-hacker-blue mb-2">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
              placeholder="e.g., 1989"
            />
          </div>

          <div>
            <label className="block text-hacker-blue mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            >
              <option value="">Select a category</option>
              <option value="Revolution">Revolution</option>
              <option value="Invention">Invention</option>
              <option value="War">War</option>
              <option value="Discovery">Discovery</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Region</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="e.g., Europe"
          />
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="Describe the historical event and how it can be viewed as a hack..."
          />
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Team (comma-separated)</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="e.g., Citizens, Politicians, Media"
          />
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Outcome</label>
          <textarea
            name="outcome"
            value={formData.outcome}
            onChange={handleChange}
            required
            rows={2}
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
            placeholder="What were the consequences of this historical hack?"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-hacker-green text-dark-bg font-bold rounded hover:bg-opacity-80"
        >
          Submit Hack
        </button>
      </form>
    </div>
  );
};

export default SubmitHack; 