"use client";
import React from "react";

function generate() {
  return (
    <div>s
      <div className="text-3xl font-bold">
        Creating a React Native Component or Screen with Glim CLI: Choose Your
        Approach, Define Component Path, and Harness the Power of AI
      </div>
      <div className="mockup-code mt-8 ">
        <pre data-prefix="$">
          <code>npx glim-cli generate</code>
        </pre>
      </div>
      <div className="mt-6">
        Creating a React Native Component with Glim CLI: Choose Your Approach,
        Define Component Path, and Harness the Power of AI
      </div>
      <div className="mt-6">
        When utilizing Glim CLI to create a React Native component or screen,
        developers have the flexibility to choose their desired creation type.
        Upon running the CLI command, users are prompted to specify whether they
        want to build a screen or a component.
      </div>
      <div className="mt-6">
        If the user selects the component option, Glim CLI generates not only
        the component file but also the corresponding style file and test file,
        providing a comprehensive foundation for component development.
      </div>
      <div className="mt-6">
        In terms of the component path, Glim CLI follows a logical process to
        determine where the files should be created. Firstly, it checks if a
        src/components directory already exists within the project folder. If
        found, the files are created within this default component path.
      </div>
      <div className="mt-6">
        However, if a specific component path is configured in the Glim config
        file, Glim CLI will use that predefined path to create the files. To
        ensure flexibility, if no component path is configured in the config
        file, Glim CLI prompts the user to specify the desired component path.
        The CLI then stores this path as the default component path in the Glim
        config file for future use.
      </div>
      <div className="mt-6">
        With Glim CLI, developers have the freedom to choose their preferred
        creation method, whether it is a component or a screen, conveniently
        define the component path, and even harness the power of AI by providing
        the ChatGPT API key. This comprehensive approach optimizes the component
        and screen creation workflows for React Native projects.
      </div>

      <div className="mockup-code mt-8">
        <pre data-prefix="$">
          <code>Creating a new Component</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Choose what you want to create</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Component (Powered by AI)/Screen</code>
        </pre>

        <pre className="text-warning">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Enter the component name</code>
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

export default generate;
