const Top = () => {
  function HandlePesan() {
    alert("halaman top");
  }
  return (
    <a href="/" onClick={HandlePesan}>
      Halaman top
    </a>
  );
};

export default Top;
