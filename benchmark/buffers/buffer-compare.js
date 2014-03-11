var time, diff, i;

var crypto = require('crypto');

console.log('creating buffers ...');
var buf_128_1 = crypto.randomBytes(128),
    buf_128_2 = crypto.randomBytes(128),
    buf_512_1 = crypto.randomBytes(512),
    buf_512_2 = crypto.randomBytes(512),
    buf_2048_1 = crypto.randomBytes(2048),
    buf_2048_2 = crypto.randomBytes(2048);

console.log('warming up functions ...');
for (i = 0; i < 100000; ++i)
  Buffer.comparejs(buf_128_1, buf_128_2);
for (i = 0; i < 100000; ++i)
  Buffer.compare(buf_128_1, buf_128_2);

console.log('starting benchmarks ...');

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.comparejs(buf_128_1, buf_128_2);

diff = process.hrtime(time);
console.log('comparejs(128, 128) took %d ns', diff[0] * 1e9 + diff[1]);

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.compare(buf_128_1, buf_128_2);

diff = process.hrtime(time);
console.log('  compare(128, 128) took %d ns', diff[0] * 1e9 + diff[1]);

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.comparejs(buf_512_1, buf_512_2);

diff = process.hrtime(time);
console.log('comparejs(512, 512) took %d ns', diff[0] * 1e9 + diff[1]);

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.compare(buf_512_1, buf_512_2);

diff = process.hrtime(time);
console.log('  compare(512, 512) took %d ns', diff[0] * 1e9 + diff[1]);

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.comparejs(buf_2048_1, buf_2048_2);

diff = process.hrtime(time);
console.log('comparejs(2048, 2048) took %d ns', diff[0] * 1e9 + diff[1]);

time = process.hrtime();

for (i = 0; i < 10000; ++i)
  Buffer.compare(buf_2048_1, buf_2048_2);

diff = process.hrtime(time);
console.log('  compare(2048, 2048) took %d ns', diff[0] * 1e9 + diff[1]);