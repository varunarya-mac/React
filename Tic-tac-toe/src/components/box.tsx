import PropTypes from "prop-types";
import "./box.css";

interface IBoxProps {
  id: number;
  player: string;
  onClickBtn: Function;
}

function Box({ id, player, onClickBtn }: IBoxProps) {
  const className = player ? (player === "X" ? "box x" : "box o") : "box";

  return (
    <button className={className} onClick={() => onClickBtn(id)}>
      {player}
    </button>
  );
}

Box.propTypes = {
  id: PropTypes.number,
  player: PropTypes.string,
  onClickBtn: PropTypes.func,
};

export default Box;
