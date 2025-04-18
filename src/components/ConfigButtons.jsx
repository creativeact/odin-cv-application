function ConfigButtons({ handleClearData, handleLoadData, toPDF, targetRef }) {
  return (
    <div className="config-buttons">
      <button className="clearBtn" onClick={handleClearData}>
        Clear CV
      </button>
      <button className="loadBtn" onClick={handleLoadData}>
        Load Example CV
      </button>
      <button
        className="downloadBtn"
        onClick={() => {
          toPDF(targetRef);
        }}
      >
        Download PDF
      </button>
    </div>
  );
}

export { ConfigButtons };
