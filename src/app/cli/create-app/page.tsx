"use client";
import React from "react";

function CreateApps() {
  return (
    <div>
      <div className="text-3xl font-bold">
        Creating a new React Native Project with Glim CLI:
      </div>
      <div className="mockup-code mt-8 ">
        <pre data-prefix="$">
          <code>npx glim-cli create-app</code>
        </pre>
      </div>
      <div className="mt-6">
        Above command will go through some prompts needed for the app creation.
        Once completed, it will generate a new glim project with the
        corresponding project name, specific folders, and configuration files.
      </div>

      <div className="mockup-code mt-8">
        <pre data-prefix="$">
          <code>Creating a new Glim Project</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Enter the App name:</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Your App Name</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Enter the App package name:</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Your App package Name</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Do you want to Initialize git?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Yes / No</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code> Do you want to Install Dependencies?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Yes / No</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Choose the package manager</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Npm / Yarn</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Success</code>
        </pre>
      </div>
    </div>
  );
}

export default CreateApps;
