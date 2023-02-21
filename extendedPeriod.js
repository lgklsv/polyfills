// extendedPeriodOutput(period) method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: // extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)

function extendedPeriodOutput(period) {
  let time = 0;
  let extendedPeriod = period;
  setInterval(() => {
    time += period;
    extendedPeriod += period;
    console.log(`${time}(after ${extendedPeriod} ms)`);
  }, extendedPeriod);
}

extendedPeriodOutput(100);
