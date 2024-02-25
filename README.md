# About

Performance demo for large tables using the `table` package. This creates a table with ~3000 rows, and measures the time taken.

## Getting Started

- Clone this repo
- `npm install`
- `node index.js`

The running time will be output to the console.

## CPU profile

To record a CPU profile, run:

- `node --cpu-prof index.js`

A `.cpuprof` file will be written to this directory.

You can load the file into [SpeedScope](https://www.speedscope.app/) to view the longest running functions.

There's an [example CPU profile](CPU.20240225.111946.11952.0.001.cpuprofile) in this repo already.

## License

This project is licensed under the MIT License.
