import { ErrorBoundary } from "./ErrorBoundary";

const ExampleComponent = () => {
    const throwError = () => {
      throw new Error('Example error');
    };
  
    return (
      <ErrorBoundary>
        <div>
          <h1>My React App</h1>
          <button onClick={throwError}>Trigger Error</button>
        </div>
      </ErrorBoundary>
    );
  };

export default ExampleComponent;
