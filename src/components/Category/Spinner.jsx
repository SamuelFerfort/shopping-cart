import PropTypes from "prop-types";

const Spinner = ({ size = 40 }) => {
  return (
    <main className="Spinner">
      <div
        style={{
          display: "flex",
          width: `${size}px`,
          height: `${size}px`,
          border: `4px solid black`,
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginLeft: "1100px",
        }}
      />
    </main>
  );
};

const keyframes = `
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

const SpinnerWithStyles = () => (
  <>
    <style>{keyframes}</style>
    <Spinner />
  </>
);

export default SpinnerWithStyles;

Spinner.propTypes = {
  size: PropTypes.number,
};
