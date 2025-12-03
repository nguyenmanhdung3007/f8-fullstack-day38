import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import PropTypes from "prop-types";
import { memo, useCallback, useState } from "react";

const CounterA = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Count A is {value}</h2>

      <Button variant="outline" onClick={onIncrease}>
        Increase Count A
      </Button>
    </div>
  );
});

CounterA.prototype = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
};
const CounterB = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Count B is {value}</h2>

      <Button variant="outline" onClick={onIncrease}>
        Increase Count B
      </Button>
    </div>
  );
});

CounterB.prototype = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

function Counter() {
  const [countA, setCounterA] = useState(0);
  const [countB, setCounterB] = useState(0);
  const handleClickA = useCallback(() => setCounterA((prev) => prev + 1), []);
  const handleClickB = useCallback(() => setCounterB((prev) => prev + 1), []);
  return (
    <div>
      <h1>Counter</h1>
      <CounterA value={countA} onIncrease={handleClickA} />
      <CounterB value={countB} onIncrease={handleClickB} />
    </div>
  );
}

export default Counter;
