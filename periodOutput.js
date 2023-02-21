// periodOutput(period) method should output in the console once per every period how mach time has passed since the first function call. Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...

function periodOutput(period) {
  let time = 0;
  setInterval(() => {
    time += period;
    console.log(`${time}(after ${period} ms)`);
  }, period);
}

periodOutput(100);
