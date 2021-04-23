const PixelDraw = () => {
  const walletInContest = true;

  return (
    <div>
      {!walletInContest && (
        <div>
          There is a contest running currently! -contest info-
          <button>Join the Contest</button>
        </div>
      )}

      {walletInContest && (
        <div className="flex items-center justify-center p-8">
          <div className="h-auto w-[600px] h-[600px] border bg-gray-200 animate-pulse border-gray-300 rounded-lg shadow"></div>
        </div>
      )}
    </div>
  );
};

export default PixelDraw;
