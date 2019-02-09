import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import StarRatingComponent from "react-star-ratings";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const pathDef =
  "M23,42.3458062 L23,43 C22.8324032,42.8918531 22.6657366,42.783572 22.5,42.6751566 C22.3342634,42.783572 22.1675968,42.8918531 22,43 L22,42.3458062 C11.9786237,35.6985173 5.43629569,28.5489806 2.37301587,20.8971963 C-0.791005291,12.9937695 -0.791005291,6.02803738 2.37301587,0 L23,0 L42.6269841,0 C45.7910053,6.02803738 45.7910053,12.9937695 42.6269841,20.8971963 C39.5637043,28.5489806 33.0213763,35.6985173 23,42.3458062 Z";
const options = ["Soldier", "Spearman", "Dog"];

const unitValues = { Soldier: 100, Spearman: 150, Dog: 200 };

const damageTable = {
  Soldier: { Soldier: 55, Spearman: 35, Dog: 45 },
  Spearman: { Soldier: 75, Spearman: 55, Dog: 80 },
  Dog: { Soldier: 75, Spearman: 45, Dog: 65 }
};
export default class Form extends React.Component {
  state = {
    attacker: options[0],
    attackerDefense: 1,
    attackerLife: 10,
    isCrit: false,
    defender: options[0],
    defenderDefense: 1,
    defenderLife: 10
  };

  _onSelect = field => event => {
    this.setState({ [field]: event.value });
  };

  _onStarChange = field => value => {
    this.setState({ [field]: value });
  };

  render() {
    const {
      attacker,
      attackerDefense,
      attackerLife,
      isCrit,
      defender,
      defenderDefense,
      defenderLife
    } = this.state;
    let damage =
      (((attackerLife / 10) * damageTable[attacker][defender]) / 100) *
      (1 - (0.1 * (defenderDefense - 1) * defenderLife) / 10);
    if (isCrit) damage = damage * 1.5;

    const attackValue =
      unitValues[defender] * Math.min(defenderLife / 10, damage);
    let maxAttackCost =
      defenderLife * 10 - damageTable[attacker][defender] <= 0
        ? 0
        : (((unitValues[attacker] *
            (defenderLife * 10 - damageTable[attacker][defender])) /
            100) *
            (1 - (0.1 * (attackerDefense - 1) * attackerLife) / 10) *
            damageTable[defender][attacker]) /
          100;
    let attackCost = Math.min(
      maxAttackCost,
      100,
      (unitValues[attacker] * attackerLife) / 10
    );
    return (
      <form style={{ width: "100%" }}>
        <div style={{ maring: 22 }}>
          {"Attacker "}
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <Dropdown
              className="dropdown"
              options={options}
              onChange={this._onSelect("attacker")}
              value={attacker}
              placeholder="Select an attacker"
            />
            <StarRatingComponent
              name="attackerDefense"
              numberOfStars={5}
              rating={attackerDefense}
              starDimension="20px"
              starRatedColor="white"
              starEmptyColor="black"
              svgIconPath={pathDef}
              changeRating={this._onStarChange("attackerDefense")}
            />
          </div>
          <div style={{ margin: 20 }}>
            <div>Life</div>
            <StarRatingComponent
              name="attackerLife"
              numberOfStars={10}
              starDimension="20px"
              starRatedColor="white"
              starEmptyColor="black"
              rating={attackerLife}
              changeRating={this._onStarChange("attackerLife")}
            />
          </div>
        </div>
        <div>
          {"Defender "}
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <Dropdown
              options={options}
              className="dropdown"
              onChange={this._onSelect("defender")}
              value={defender}
              placeholder="Select an defender"
            />
            <StarRatingComponent
              name="defenderDefense"
              numberOfStars={5}
              starDimension="20px"
              rating={defenderDefense}
              starRatedColor="white"
              starEmptyColor="black"
              svgIconPath={pathDef}
              changeRating={this._onStarChange("defenderDefense")}
            />
          </div>
          <div style={{ margin: 20 }}>
            <div>Life</div>
            <StarRatingComponent
              name="defenderLife"
              numberOfStars={10}
              starDimension="20px"
              starRatedColor="white"
              starEmptyColor="black"
              rating={defenderLife}
              changeRating={this._onStarChange("defenderLife")}
            />
          </div>
        </div>
        <div style={{ margin: 20 }}>
          Is critical?
          <div style={{ padding: 10 }}>
            <Toggle
              label="Critical"
              checked={isCrit}
              onChange={value => {
                this.setState({ isCrit: !this.state.isCrit });
              }}
            />
          </div>
        </div>
        <div>
          <div>
            Attack Value: <b>{attackValue.toFixed(0)}</b>
          </div>
          <div>
            Counter attack Cost: <b>{attackCost.toFixed(0)}</b>
          </div>
          <div style={{ fontSize: 22 }}>
            Balance Attack: <b>{(attackValue - attackCost).toFixed(0)}</b>
          </div>
        </div>
      </form>
    );
  }
}
