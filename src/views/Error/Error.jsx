import './Error.scss';

const Error = () => {
  return (
    <div className="error-view">
      <h1>Oups... cette page n' existe pas!</h1>
      <span className="error-404">404</span>
      <a href="/">Retourner vers la page d' accueil...</a>
    </div>
  );
};

export default Error;
