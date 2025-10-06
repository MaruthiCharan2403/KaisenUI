
import React from "react";

const RequestForm = () => {
  return (
    <div className="bg-white dark:bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-6">Submit New Component</h3>
  <div className="grid grid-cols-2 gap-6">
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Component Name</label>
      <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Category</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>UI Elements</option>
        <option>Form Controls</option>
        <option>Navigation</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Complexity</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Simple</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Advanced</span>
        </label>
      </div>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Description</label>
      <textarea rows="3" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Dependencies</label>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">React</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Tailwind</span>
        </label>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Priority</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Preview Image</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="text-sm text-gray-500 dark:text-gray-600">Upload component screenshot</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
    <div className="col-span-2 flex justify-end gap-4">
      <button className="px-6 py-3 border border-gray-300 dark:border-gray-400 rounded-lg text-gray-700 dark:text-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-200">
        Cancel
      </button>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Component
      </button>
    </div>
  </div>
</div>
  );
};

export default RequestForm;
