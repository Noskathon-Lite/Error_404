import React from 'react';

const AnxietyPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600">Managing Anxiety: Resources and Support</h1>
        <p className="text-lg text-gray-700 mt-4">Understand your anxiety and explore ways to manage it effectively.</p>
      </header>

      {/* What is Anxiety Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">What is Anxiety?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Anxiety is a natural response to stress. However, when it becomes overwhelming, it can interfere with your daily activities.
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li>Restlessness or feeling on edge</li>
          <li>Excessive worry or fear about upcoming events</li>
          <li>Physical symptoms like a racing heartbeat, dizziness, or shortness of breath</li>
        </ul>
      </section>

      {/* Types of Anxiety Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Types of Anxiety</h2>
        <p className="text-lg text-gray-600 mt-4">There are various types of anxiety disorders. Understanding them can help you identify and manage your anxiety better.</p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><strong>Generalized Anxiety Disorder (GAD):</strong> Chronic anxiety and worry about various events.</li>
          <li><strong>Panic Disorder:</strong> Sudden, recurring panic attacks with physical symptoms.</li>
          <li><strong>Social Anxiety Disorder:</strong> Overwhelming fear of social situations and being judged.</li>
          <li><strong>Specific Phobias:</strong> Intense fear of specific objects or situations.</li>
        </ul>
      </section>

      {/* Coping Strategies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Coping Strategies</h2>
        <p className="text-lg text-gray-600 mt-4">Try these effective strategies to manage your anxiety and bring yourself back to a state of calm.</p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><strong>Breathing Exercises:</strong> Practice deep breathing techniques, like the 4-7-8 method, to reduce stress.</li>
          <li><strong>Grounding Techniques:</strong> Use the 5-4-3-2-1 method to help you stay focused and present.</li>
          <li><strong>Progressive Muscle Relaxation:</strong> Tense and relax different muscle groups to release physical tension.</li>
          <li><strong>Mindfulness Meditation:</strong> Practice mindfulness to focus on the present moment and ease your mind.</li>
        </ul>
      </section>

      {/* Professional Help Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">When to Seek Professional Help</h2>
        <p className="text-lg text-gray-600 mt-4">
          If your anxiety is overwhelming or interfering with your daily life, it may be time to speak with a healthcare professional.
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li>If anxiety is interfering with your work, relationships, or daily activities.</li>
          <li>If you experience panic attacks or uncontrollable worry.</li>
          <li>If anxiety leads to physical symptoms like a racing heart or shortness of breath.</li>
        </ul>
        <p className="text-lg text-gray-600 mt-4">Consider reaching out to a therapist or counselor for personalized support.</p>
      </section>

      {/* Guided Anxiety Relief Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Guided Anxiety Relief</h2>
        <p className="text-lg text-gray-600 mt-4">
          Relaxation exercises can help relieve anxiety. Try these options to reduce your symptoms.
        </p>
        <div className="text-center mt-6">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Listen to Guided Meditation
          </button>
        </div>
      </section>

      {/* Helpful Apps Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Helpful Apps for Anxiety</h2>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><a href="https://www.calm.com/" className="text-blue-600">Calm:</a> A popular app for meditation, relaxation, and sleep.</li>
          <li><a href="https://www.headspace.com/" className="text-blue-600">Headspace:</a> Guided meditations and mindfulness exercises.</li>
          <li><a href="https://www.calmharm.co.uk/" className="text-blue-600">Calm Harm:</a> A free app that provides tasks to help manage distressing emotions.</li>
        </ul>
      </section>

      {/* Community Support Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Community Support</h2>
        <p className="text-lg text-gray-600 mt-4">
          Sometimes, sharing your experiences and connecting with others can be a great source of support. Consider joining a community group or forum.
        </p>
        <div className="text-center mt-6">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Join the Anxiety Support Forum
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-lg text-gray-600 py-6">
        <p>Remember, you're not alone. Help is always available, and taking small steps each day can make a big difference.</p>
        <p className="mt-4">If you need immediate assistance, please reach out to a professional.</p>
      </footer>
    </div>
  );
};

export default AnxietyPage;
