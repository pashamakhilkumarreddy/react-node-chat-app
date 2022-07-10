import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(err) {
    console.error(err);
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, errInfo) {
    const { info } = this.props;
    const timestamp = new Date().getTime();
    const metadata = {
      extra: info,
      tags: {
        timestamp,
        errorContext: "client",
        source: "ErrorBoundary",
      },
    };
    console.error(`Error data ${metadata}`);
    console.error(err, errInfo);
  }
  render() {
    const {
      children,
      info = "Something went wrong at",
      location = "Home",
    } = this.props;
    const { hasError } = this.state;
    return hasError ? (
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="column has-text-centered">
            <h2 className="h1 is-size-1">{`${info} ${location}`}!</h2>
          </div>
        </div>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
