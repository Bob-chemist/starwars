import React, { useState } from 'react';
import classes from './ErrorButton.module.sass';

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    this.foo.bar = 0;
  }

  return (
    <button
      className={`error-button btn btn-danger btn-lg ${classes.ErrorButton}`}
      onClick={() => setRenderError(true)}
    >
      Throw Error
    </button>
  );
};

export default ErrorButton;

// export default class ErrorButton extends Component {
//   state = {
//     renderError: false,
//   };

//   render() {
//     if (this.state.renderError) {
//       this.foo.bar = 0;
//     }

//     return (
//       <button
//         className={`error-button btn btn-danger btn-lg ${classes.ErrorButton}`}
//         onClick={() => this.setState({ renderError: true })}
//       >
//         Throw Error
//       </button>
//     );
//   }
// }
