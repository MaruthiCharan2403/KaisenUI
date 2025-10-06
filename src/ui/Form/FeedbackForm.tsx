
import React from "react";

const FeedbackForm = () => {
  return (
    <div className="bg-blue-50 dark:bg-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-900 mb-6">Kaisen UI Feedback</h3>
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Your Role</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Developer</option>
          <option>Designer</option>
          <option>Product Manager</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Usage Frequency</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Favorite Components</label>
      <div className="grid grid-cols-3 gap-3">
        {['Buttons', 'Forms', 'Cards', 'Modals', 'Navigation', 'Tables'].map((component) => (
          <label key={component} className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-blue-300" />
            <span className="ml-2 text-blue-800 dark:text-blue-900">{component}</span>
          </label>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Overall Rating</label>
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map((star) => (
          <button key={star} className="text-3xl text-amber-400 hover:scale-110 transition-transform">★</button>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">What's missing?</label>
      <textarea rows="3" className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Would you recommend Kaisen UI?</label>
      <div className="flex gap-6">
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Definitely</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Maybe</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Not sure</span>
        </label>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Feedback
      </button>
    </div>
  </div>
</div>
  );
};

export default FeedbackForm;
