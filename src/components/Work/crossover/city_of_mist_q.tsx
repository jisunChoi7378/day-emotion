import Iframe from "react-iframe";

const City_of_mist_q = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">
          검은방, 회색도시, 베리드 스타즈
        </h2>
        <div className="work-author">written by. Qul</div>
      </header>
      <div className="flex justify-center">
        <Iframe
          url="https://youtu.be/uWaO0mmFI_Q?si=n2k9ZF-Jz29omXZV"
          width="560"
          height="315"
        />
      </div>
    </article>
  );
};

export default City_of_mist_q;
